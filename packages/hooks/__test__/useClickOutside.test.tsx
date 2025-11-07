import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { useRef } from 'react'
import '@testing-library/jest-dom'

import useClickOutside from '../useClickOutside'

describe('hooks/useClickOutside', () => {
  it('should add click-outside listener', () => {
    const handler = vi.fn()

    const TestComponent = () => {
      const targetRef = useRef<HTMLDivElement>(null)
      const btnRef = useRef<HTMLButtonElement>(null)

      useClickOutside(targetRef as React.RefObject<HTMLElement>, handler)

      return (
        <div ref={targetRef} data-testid="target">
          <button ref={btnRef} data-testid="button">
            Click me
          </button>
        </div>
      )
    }

    render(<TestComponent />)
    const button = screen.getByTestId('button')
    const target = screen.getByTestId('target')

    // 点击元素内部不应该触发回调
    fireEvent.click(button)
    expect(handler).not.toHaveBeenCalled()

    // 点击元素本身也不应该触发回调
    fireEvent.click(target)
    expect(handler).not.toHaveBeenCalled()

    // 点击外部应该触发回调
    fireEvent.click(document.body)
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('should not trigger callback when elementRef is null', () => {
    const handler = vi.fn()

    const TestComponent = () => {
      const nullRef = useRef<HTMLElement | null>(null)
      useClickOutside(nullRef as React.RefObject<HTMLElement>, handler)
      return <div data-testid="test">Test</div>
    }

    render(<TestComponent />)

    // 即使点击外部，如果 ref.current 是 null，也不应该触发回调
    fireEvent.click(document.body)
    expect(handler).not.toHaveBeenCalled()
  })

  it('should handle multiple clicks outside', () => {
    const handler = vi.fn()

    const TestComponent = () => {
      const targetRef = useRef<HTMLDivElement>(null)
      useClickOutside(targetRef as React.RefObject<HTMLElement>, handler)
      return (
        <div ref={targetRef} data-testid="target">
          Content
        </div>
      )
    }

    render(<TestComponent />)

    // 多次点击外部应该多次触发回调
    fireEvent.click(document.body)
    fireEvent.click(document.body)
    fireEvent.click(document.body)

    expect(handler).toHaveBeenCalledTimes(3)
  })

  it('should pass MouseEvent to callback', () => {
    const handler = vi.fn()

    const TestComponent = () => {
      const targetRef = useRef<HTMLDivElement>(null)
      useClickOutside(targetRef as React.RefObject<HTMLElement>, handler)
      return (
        <div ref={targetRef} data-testid="target">
          Content
        </div>
      )
    }

    render(<TestComponent />)

    fireEvent.click(document.body)

    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler).toHaveBeenCalledWith(expect.any(MouseEvent))
  })

  it('should not trigger callback when clicking nested element', () => {
    const handler = vi.fn()

    const TestComponent = () => {
      const targetRef = useRef<HTMLDivElement>(null)
      const nestedRef = useRef<HTMLSpanElement>(null)

      useClickOutside(targetRef as React.RefObject<HTMLElement>, handler)

      return (
        <div ref={targetRef} data-testid="target">
          <span ref={nestedRef} data-testid="nested">
            Nested content
          </span>
        </div>
      )
    }

    render(<TestComponent />)
    const nested = screen.getByTestId('nested')

    // 点击嵌套元素不应该触发回调
    fireEvent.click(nested)
    expect(handler).not.toHaveBeenCalled()
  })
})
