import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { useRef } from 'react'
import '@testing-library/jest-dom'

import { useFocusController } from '../useFocusController'

describe('useFocusController', () => {
  it('should update isFocused when focus and blur events occur', () => {
    const afterFocus = vi.fn()
    const beforeBlur = vi.fn()
    const afterBlur = vi.fn()

    const TestComponent = () => {
      const inputRef = useRef<HTMLInputElement>(null)
      const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(
        inputRef as React.RefObject<HTMLElement>,
        {
          afterFocus,
          beforeBlur,
          afterBlur
        }
      )

      return (
        <div ref={wrapperRef}>
          <input
            ref={inputRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            data-testid="input"
          />
          <span data-testid="status">{isFocused ? 'focused' : 'blurred'}</span>
        </div>
      )
    }

    render(<TestComponent />)
    const input = screen.getByTestId('input')
    const status = screen.getByTestId('status')

    // 初始状态
    expect(status).toHaveTextContent('blurred')

    // 聚焦
    fireEvent.focus(input)
    expect(status).toHaveTextContent('focused')
    expect(afterFocus).toHaveBeenCalledTimes(1)

    // 重复聚焦
    fireEvent.focus(input)
    expect(status).toHaveTextContent('focused')
    expect(afterFocus).toHaveBeenCalledTimes(1) // 不应该再次调用

    // 失焦
    fireEvent.blur(input, { relatedTarget: null })
    expect(status).toHaveTextContent('blurred')
    expect(beforeBlur).toHaveBeenCalledTimes(1)
    expect(afterBlur).toHaveBeenCalledTimes(1)

    // 点击 wrapper 应该聚焦 input
    const wrapper = input.parentElement
    if (wrapper) {
      fireEvent.click(wrapper)
      // 注意：在测试环境中，focus() 可能不会触发 focus 事件
      // 所以这里主要测试点击事件不会报错
    }
  })

  it('should call blur logic when beforeBlur is not a function', () => {
    const afterBlurMock = vi.fn()

    const TestComponent = () => {
      const inputRef = useRef<HTMLInputElement>(null)
      const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(
        inputRef as React.RefObject<HTMLElement>,
        {
          beforeBlur: undefined as any,
          afterBlur: afterBlurMock
        }
      )

      return (
        <div ref={wrapperRef}>
          <input
            ref={inputRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            data-testid="input"
          />
          <span data-testid="status">{isFocused ? 'focused' : 'blurred'}</span>
        </div>
      )
    }

    render(<TestComponent />)
    const input = screen.getByTestId('input')
    const status = screen.getByTestId('status')

    // 聚焦
    fireEvent.focus(input)
    expect(status).toHaveTextContent('focused')

    // blur 时因为 beforeBlur 是 undefined, 应继续执行逻辑
    fireEvent.blur(input, { relatedTarget: null })
    expect(status).toHaveTextContent('blurred')
    expect(afterBlurMock).toHaveBeenCalledTimes(1)
  })

  it('should cancel blur when beforeBlur returns true', () => {
    const afterBlurMock = vi.fn()

    const TestComponent = () => {
      const inputRef = useRef<HTMLInputElement>(null)
      const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(
        inputRef as React.RefObject<HTMLElement>,
        {
          beforeBlur: () => true, // 阻止 blur
          afterBlur: afterBlurMock
        }
      )

      return (
        <div ref={wrapperRef}>
          <input
            ref={inputRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            data-testid="input"
          />
          <span data-testid="status">{isFocused ? 'focused' : 'blurred'}</span>
        </div>
      )
    }

    render(<TestComponent />)
    const input = screen.getByTestId('input')
    const status = screen.getByTestId('status')

    fireEvent.focus(input)
    expect(status).toHaveTextContent('focused')

    fireEvent.blur(input, { relatedTarget: null })
    // 因为 beforeBlur 返回 true，所以 isFocused 仍然是 true
    expect(status).toHaveTextContent('focused')
    expect(afterBlurMock).not.toHaveBeenCalled()
  })

  it('should cancel blur when relatedTarget is inside wrapperRef', () => {
    const afterBlurMock = vi.fn()

    const TestComponent = () => {
      const inputRef = useRef<HTMLInputElement>(null)
      const nextButtonRef = useRef<HTMLButtonElement>(null)

      const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(
        inputRef as React.RefObject<HTMLElement>,
        {
          afterBlur: afterBlurMock
        }
      )

      return (
        <div ref={wrapperRef}>
          <input
            ref={inputRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            data-testid="input"
          />
          <button ref={nextButtonRef} data-testid="next">
            Next
          </button>
          <span data-testid="status">{isFocused ? 'focused' : 'blurred'}</span>
        </div>
      )
    }

    render(<TestComponent />)
    const input = screen.getByTestId('input')
    const nextBtn = screen.getByTestId('next')
    const status = screen.getByTestId('status')

    // 聚焦
    fireEvent.focus(input)
    expect(status).toHaveTextContent('focused')

    // blur，且 relatedTarget 是 wrapperRef 内的 button
    fireEvent.blur(input, {
      relatedTarget: nextBtn
    })

    // 不应执行 blur 操作
    expect(status).toHaveTextContent('focused')
    expect(afterBlurMock).not.toHaveBeenCalled()
  })

  it('should call onFocus and onBlur callbacks when provided', () => {
    const onFocusMock = vi.fn()
    const onBlurMock = vi.fn()

    const TestComponent = () => {
      const inputRef = useRef<HTMLInputElement>(null)
      const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(
        inputRef as React.RefObject<HTMLElement>,
        {
          onFocus: onFocusMock,
          onBlur: onBlurMock
        }
      )

      return (
        <div ref={wrapperRef}>
          <input
            ref={inputRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            data-testid="input"
          />
          <span data-testid="status">{isFocused ? 'focused' : 'blurred'}</span>
        </div>
      )
    }

    render(<TestComponent />)
    const input = screen.getByTestId('input')

    fireEvent.focus(input)
    expect(onFocusMock).toHaveBeenCalledTimes(1)

    fireEvent.blur(input, { relatedTarget: null })
    expect(onBlurMock).toHaveBeenCalledTimes(1)
  })
})
