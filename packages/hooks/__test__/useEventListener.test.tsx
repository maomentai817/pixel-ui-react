import { describe, expect, it, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { useRef } from 'react'
import '@testing-library/jest-dom'

import useEventListener from '../useEventListener'

describe('hooks/useEventListener', () => {
  it('should add and remove event listener when target is HTMLElement', () => {
    const target = document.createElement('button')
    const handler = vi.fn()

    const TestComponent = () => {
      useEventListener(target, 'click', handler)
      return <div id="container" data-testid="container"></div>
    }

    const { unmount } = render(<TestComponent />)

    // 将按钮添加到容器中
    const container = document.getElementById('container')
    if (container) {
      container.appendChild(target)
    }

    // 触发点击事件
    fireEvent.click(target)
    expect(handler).toHaveBeenCalledTimes(1)

    // 卸载组件后，事件监听器应该被移除
    unmount()
    fireEvent.click(target)
    // handler 应该仍然只被调用一次（因为卸载后事件监听器已移除）
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('should add and remove event listener when target is RefObject<HTMLElement>', () => {
    const handler = vi.fn()

    const TestComponent = () => {
      const buttonRef = useRef<HTMLButtonElement>(null)
      useEventListener(buttonRef, 'click', handler)
      return <button id="container" ref={buttonRef} data-testid="button">Click me</button>
    }

    const { getByTestId, unmount } = render(<TestComponent />)
    const button = getByTestId('button')

    // 触发点击事件
    fireEvent.click(button)
    expect(handler).toHaveBeenCalledTimes(1)

    // 再次点击
    fireEvent.click(button)
    expect(handler).toHaveBeenCalledTimes(2)

    // 卸载组件后，事件监听器应该被移除
    unmount()
    fireEvent.click(button)
    // handler 应该仍然只被调用两次（因为卸载后事件监听器已移除）
    expect(handler).toHaveBeenCalledTimes(2)
  })

  it('should update handler when handler changes', () => {
    const handler1 = vi.fn()
    const handler2 = vi.fn()

    const TestComponent = ({ handler }: { handler: (e: Event) => void }) => {
      const buttonRef = useRef<HTMLButtonElement>(null)
      useEventListener(buttonRef, 'click', handler)
      return <button ref={buttonRef} data-testid="button">Click me</button>
    }

    const { getByTestId, rerender } = render(<TestComponent handler={handler1} />)
    const button = getByTestId('button')

    // 使用第一个 handler
    fireEvent.click(button)
    expect(handler1).toHaveBeenCalledTimes(1)
    expect(handler2).not.toHaveBeenCalled()

    // 更新 handler
    rerender(<TestComponent handler={handler2} />)

    // 使用第二个 handler
    fireEvent.click(button)
    expect(handler1).toHaveBeenCalledTimes(1)
    expect(handler2).toHaveBeenCalledTimes(1)
  })

  it('should handle null target gracefully', () => {
    const handler = vi.fn()

    const TestComponent = () => {
      const nullRef = useRef<HTMLElement | null>(null)
      useEventListener(nullRef, 'click', handler)
      return <div data-testid="container">Test</div>
    }

    render(<TestComponent />)

    // 不应该报错，handler 不应该被调用（因为 ref.current 是 null）
    expect(handler).not.toHaveBeenCalled()
  })

  it('should handle different event types', () => {
    const clickHandler = vi.fn()
    const mouseEnterHandler = vi.fn()

    const TestComponent = () => {
      const buttonRef = useRef<HTMLButtonElement>(null)
      useEventListener(buttonRef, 'click', clickHandler)
      useEventListener(buttonRef, 'mouseenter', mouseEnterHandler)
      return <button ref={buttonRef} data-testid="button">Click me</button>
    }

    const { getByTestId } = render(<TestComponent />)
    const button = getByTestId('button')

    fireEvent.click(button)
    expect(clickHandler).toHaveBeenCalledTimes(1)
    expect(mouseEnterHandler).not.toHaveBeenCalled()

    fireEvent.mouseEnter(button)
    expect(clickHandler).toHaveBeenCalledTimes(1)
    expect(mouseEnterHandler).toHaveBeenCalledTimes(1)
  })
})
