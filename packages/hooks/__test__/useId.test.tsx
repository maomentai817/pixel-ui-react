import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { useId } from '../useId'

describe('useId', () => {
  it('should return a string id with default namespace', () => {
    const TestComponent = () => {
      const id = useId()
      return <div data-testid="test">{id}</div>
    }

    render(<TestComponent />)
    const element = screen.getByTestId('test')
    expect(element.textContent).toMatch(/^px-\d+-\d+$/)
  })

  it('should return the same id on re-render with same namespace', () => {
    let firstId: string | null = null
    let secondId: string | null = null

    const TestComponent = ({ renderCount }: { renderCount: number }) => {
      const id = useId()
      if (renderCount === 1) {
        firstId = id
      } else if (renderCount === 2) {
        secondId = id
      }
      return <div data-testid="test">{id}</div>
    }

    const { rerender } = render(<TestComponent renderCount={1} />)
    rerender(<TestComponent renderCount={2} />)

    // useMemo 确保相同 namespace 返回相同的 id
    expect(firstId).toBe(secondId)
  })

  it('should support custom namespace', () => {
    const TestComponent = () => {
      const id = useId('custom')
      return <div data-testid="test">{id}</div>
    }

    render(<TestComponent />)
    const element = screen.getByTestId('test')
    expect(element.textContent).toMatch(/^custom-\d+-\d+$/)
  })

  it('should generate different ids on multiple calls in same component', () => {
    let id1: string | null = null
    let id2: string | null = null

    const TestComponent = () => {
      id1 = useId()
      id2 = useId()
      return (
        <div>
          <span data-testid="id1">{id1}</span>
          <span data-testid="id2">{id2}</span>
        </div>
      )
    }

    render(<TestComponent />)
    expect(id1).not.toBe(id2)
    expect(screen.getByTestId('id1').textContent).not.toBe(screen.getByTestId('id2').textContent)
  })

  it('should generate different ids in different components', () => {
    let id1: string | null = null
    let id2: string | null = null

    const Component1 = () => {
      id1 = useId()
      return <div data-testid="comp1">{id1}</div>
    }

    const Component2 = () => {
      id2 = useId()
      return <div data-testid="comp2">{id2}</div>
    }

    render(
      <div>
        <Component1 />
        <Component2 />
      </div>
    )

    expect(id1).not.toBe(id2)
    expect(screen.getByTestId('comp1').textContent).not.toBe(screen.getByTestId('comp2').textContent)
  })

  it('should generate different ids when namespace changes', () => {
    let id1: string | null = null
    let id2: string | null = null

    const TestComponent = ({ namespace }: { namespace: string }) => {
      const id = useId(namespace)
      if (namespace === 'ns1') {
        id1 = id
      } else {
        id2 = id
      }
      return <div data-testid="test">{id}</div>
    }

    const { rerender } = render(<TestComponent namespace="ns1" />)
    rerender(<TestComponent namespace="ns2" />)

    // 不同 namespace 应该生成不同的 id
    expect(id1).not.toBe(id2)
    expect(id1).toMatch(/^ns1-\d+-\d+$/)
    expect(id2).toMatch(/^ns2-\d+-\d+$/)
  })
})
