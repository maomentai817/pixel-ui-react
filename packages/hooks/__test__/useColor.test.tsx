import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render } from '@testing-library/react'
import { usePxButtonCustomStyle } from '../useColor'

interface UseColorButtonProps {
  color?: string
  plain?: boolean
  disabled?: boolean
}

describe('usePxButtonCustomStyle', () => {
  const defaultProps: UseColorButtonProps = {
    color: '#209cee',
    plain: false,
    disabled: false
  }

  const getResult = (props: UseColorButtonProps, overrideColor?: string) => {
    let result: Record<string, string> = {}

    const TestComponent = () => {
      result = usePxButtonCustomStyle(props, overrideColor)
      return <div data-testid="test" style={result}></div>
    }

    render(<TestComponent />)
    return result
  }

  it('returns empty object if no color', () => {
    const styles = getResult({ ...defaultProps, color: undefined })
    expect(styles).toEqual({})
  })

  it('generates correct styles for solid button', () => {
    const styles = getResult(defaultProps)

    expect(styles['--px-bg-color']).toBe('#209cee')
    expect(styles['--px-hover-bg-color']).toBeDefined()
    expect(styles['--px-text-color']).toBe('var(--px-color-base)')
  })

  it('generates correct styles for plain button', () => {
    const styles = getResult({ ...defaultProps, plain: true })

    expect(styles['--px-plain-bg-color']).toBeDefined()
    expect(styles['--px-text-color']).toBe('#209cee')
    expect(styles['--px-hover-bg-color']).toBe('#209cee')
    expect(styles['--px-hover-text-color']).toBe('var(--px-color-base)')
    expect(styles['--px-plain-bg-shadow-color']).toBeDefined()
  })

  it('generates correct styles for disabled plain button', () => {
    const styles = getResult({ ...defaultProps, plain: true, disabled: true })

    expect(styles['--px-disabled-bg-color']).toBeDefined()
    expect(styles['--px-disabled-text-color']).toBeDefined()
  })

  it('generates correct styles for disabled solid button', () => {
    const styles = getResult({ ...defaultProps, plain: false, disabled: true })

    expect(styles['--px-disabled-bg-color']).toBeDefined()
    expect(styles['--px-disabled-text-color']).toBe('var(--px-color-white)')
  })

  it('supports overrideColor', () => {
    const styles = getResult(defaultProps, '#e91e63')
    expect(styles['--px-bg-color']).toBe('#e91e63')
    expect(styles['--px-hover-bg-color']).not.toBe('var(--px-color-white)')
  })

  describe('supports CSS var color', () => {
    const getComputedStyleMock = vi.fn()

    beforeEach(() => {
      vi.stubGlobal('getComputedStyle', getComputedStyleMock)
      getComputedStyleMock.mockReturnValue({
        getPropertyValue: (prop: string) => {
          if (prop === '--custom-color') return ' #42b983 '
          return ''
        }
      })
    })

    afterEach(() => {
      vi.unstubAllGlobals()
    })

    it('resolves CSS variable color', () => {
      const styles = getResult({
        ...defaultProps,
        color: 'var(--custom-color)'
      })
      expect(styles['--px-bg-color']).toBe('#42b983')
    })
  })
})
