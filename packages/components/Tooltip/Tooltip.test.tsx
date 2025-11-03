import { render, fireEvent, screen } from '@testing-library/react'
import { act } from 'react';

import { describe, it, expect, test, vi, beforeEach, afterEach } from 'vitest'
import '@testing-library/jest-dom'

import { PxTooltip } from '.'

// SFC 组件
import Tooltip from './Tooltip'

describe('Tooltip/index', () => {
  // 测试组件是否被正确导出
  it('component should be exported', () => {
    expect(PxTooltip).toBe(Tooltip)
  })
})

vi.mock('@popperjs/core', () => ({
  createPopper: vi.fn(() => ({
    setOptions: vi.fn(),
    destroy: vi.fn(),
    update: vi.fn(),
  })),
}))

const onVisibleChange = vi.fn()

describe('Tooltip', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.runOnlyPendingTimers()
    vi.useRealTimers()
  })

  // tooltip 基础触发
  test('basic tooltip', async () => {
    const { container } = render(
      <div>
        <div id="outside">outside</div>
        <Tooltip content="hello tooltip" trigger="click" onVisibleChange={onVisibleChange}>
          <button id="trigger">trigger</button>
        </Tooltip>
      </div>
    )

    const triggerButton = screen.getByRole('button', { name: /trigger/i })
    const popper = container.querySelector('[data-testid="px-tooltip__popper"]')

    expect(triggerButton).toBeInTheDocument()
    expect(popper).not.toBeInTheDocument()

    // 弹出层是否出现
    fireEvent.click(triggerButton)
    await vi.runAllTimersAsync()

    // 等待 React 完成渲染（微任务）
    await act(async () => {
      await Promise.resolve()
    })

    const popperAfterClick = container.querySelector('[data-testid="px-tooltip__popper"]')
    expect(popperAfterClick).toBeInTheDocument()
    expect(popperAfterClick).toHaveTextContent('hello tooltip')
    expect(onVisibleChange).toHaveBeenCalledWith(true)

    // 再次点击
    fireEvent.click(triggerButton)
    await vi.runAllTimersAsync()

    const popperAfterSecondClick = container.querySelector('[data-testid="px-tooltip__popper"]')
    // 等待动画完成
    await vi.runAllTimersAsync()
    expect(popperAfterSecondClick).not.toBeInTheDocument()
    expect(onVisibleChange).toHaveBeenCalledTimes(2)

    // 再次打开
    fireEvent.click(triggerButton)
    await vi.runAllTimersAsync()

    // 等待 React 完成渲染（微任务）
    await act(async () => {
      await Promise.resolve()
    })

    const popperAfterThirdClick = container.querySelector('[data-testid="px-tooltip__popper"]')
    expect(popperAfterThirdClick).toBeInTheDocument()

    // 区域外点击关闭 tooltip
    const outside = container.querySelector('#outside')
    fireEvent.click(outside!)
    await vi.runAllTimersAsync()

    const popperAfterOutsideClick = container.querySelector('[data-testid="px-tooltip__popper"]')
    await vi.runAllTimersAsync()
    expect(popperAfterOutsideClick).not.toBeInTheDocument()
    expect(onVisibleChange).toHaveBeenCalledTimes(4)
  })

  // tooltip 悬停触发
  test('tooltip with hover trigger', async () => {
    const { container } = render(
      <Tooltip trigger="hover" content="hover trigger">
        <button>trigger</button>
      </Tooltip>
    )

    const trigger = container.querySelector('[data-testid="px-tooltip__trigger"]')
    expect(trigger).toBeInTheDocument()

    // 悬浮测试显示
    fireEvent.mouseEnter(trigger!)
    await vi.runAllTimersAsync()
    await act(async () => {
      await Promise.resolve()
    })

    const popper = container.querySelector('[data-testid="px-tooltip__popper"]')
    expect(popper).toBeInTheDocument()

    // 悬浮测试离开popper隐藏
    fireEvent.mouseLeave(popper!)
    await vi.runAllTimersAsync()
    await act(async () => {
      await Promise.resolve()
    })
    const popperAfterLeave = container.querySelector('[data-testid="px-tooltip__popper"]')
    expect(popperAfterLeave).not.toBeInTheDocument()

    // 悬浮测试显示
    const trigger2 = container.querySelector('[data-testid="px-tooltip__trigger"]')
    expect(trigger2).toBeInTheDocument()

    fireEvent.mouseEnter(trigger2!)

    await vi.runAllTimersAsync()
    await act(async () => {
      await Promise.resolve()
    })

    const popper2 = container.querySelector('[data-testid="px-tooltip__popper"]')
    expect(popper2).toBeInTheDocument()

    // 悬浮测试离开trigger隐藏
    fireEvent.mouseLeave(trigger2!)
    await vi.runAllTimersAsync()
    await act(async () => {
      await Promise.resolve()
    })
    const popperAfterLeave2 = container.querySelector('[data-testid="px-tooltip__popper"]')
    expect(popperAfterLeave2).not.toBeInTheDocument()
  })

  // tooltip 点击触发
  test('tooltip with click trigger', async () => {
    const { container } = render(
      <Tooltip trigger="click" content="click trigger">
        <button>trigger</button>
      </Tooltip>
    )

    const trigger = container.querySelector('[data-testid="px-tooltip__trigger"]')
    expect(trigger).toBeInTheDocument()

    // 点击测试显示
    fireEvent.click(trigger!)
    await vi.runAllTimersAsync()
    await act(async () => {
      await Promise.resolve()
    })

    const popper = container.querySelector('[data-testid="px-tooltip__popper"]')
    expect(popper).toBeInTheDocument()

    // 点击测试隐藏
    fireEvent.click(trigger!)
    await vi.runAllTimersAsync()
    await act(async () => {
      await Promise.resolve()
    })
    const popperAfterClick = container.querySelector('[data-testid="px-tooltip__popper"]')
    expect(popperAfterClick).not.toBeInTheDocument()
  })

  // tooltip 右键菜单触发
  test('tooltip with contextmenu trigger', async () => {
    const { container } = render(
      <Tooltip trigger="contextmenu" content="contextmenu trigger">
        <button>trigger</button>
      </Tooltip>
    )

    const trigger = container.querySelector('[data-testid="px-tooltip__trigger"]')
    expect(trigger).toBeInTheDocument()

    // 右键测试显示
    fireEvent.contextMenu(trigger!)
    await vi.runAllTimersAsync()
    await act(async () => {
      await Promise.resolve()
    })

    const popper = container.querySelector('[data-testid="px-tooltip__popper"]')
    expect(popper).toBeInTheDocument()

    // 点击外部区域关闭
    fireEvent.click(document.body)
    await vi.runAllTimersAsync()

    const popperAfterClick = container.querySelector('[data-testid="px-tooltip__popper"]')
    await vi.runAllTimersAsync()
    await act(async () => {
      await Promise.resolve()
    })
    expect(popperAfterClick).not.toBeInTheDocument()
  })

  // 禁用状态的测试
  test('disabled tooltip', async () => {
    const { container } = render(
      <Tooltip disabled={true} content="disabled tooltip">
        <button>trigger</button>
      </Tooltip>
    )

    const trigger = container.querySelector('[data-testid="px-tooltip__trigger"]')
    // 测试禁用状态下点击不会触发显示
    fireEvent.click(trigger!)
    await vi.runAllTimersAsync()

    const popper = container.querySelector('[data-testid="px-tooltip__popper"]')
    expect(popper).not.toBeInTheDocument()
  })

  // 虚拟触发节点的测试
  test('tooltip with virtual trigger node', async () => {
    const virtualTrigger = document.createElement('div')
    virtualTrigger.id = 'virtual-trigger'
    document.body.appendChild(virtualTrigger)

    const { container, rerender } = render(
      <Tooltip
        virtualTriggering
        virtualRef={{ current: virtualTrigger }}
        content="virtual tooltip"
      />
    )

    await vi.runAllTimersAsync()

    await act(async () => {
      await Promise.resolve()
    })

    // 非合成事件触发，使用 dispatchEvent
    await act(async () => {
      await Promise.resolve()
      virtualTrigger.dispatchEvent(new Event('mouseenter'))
    })

    await vi.runAllTimersAsync()
    // 等待 CSSTransition 执行（需要推进时间，timeout 是 200ms）
    vi.advanceTimersByTime(100)

    // 再次等待 React 渲染完成
    await act(async () => {
      await Promise.resolve()
    })

    const popper = container.querySelector('[data-testid="px-tooltip__popper"]')
    expect(popper).toBeInTheDocument()

    // 切换为 click 触发
    rerender(
      <Tooltip
        virtualTriggering
        virtualRef={{ current: virtualTrigger }}
        trigger="click"
        content="virtual tooltip"
      />
    )

    await vi.runAllTimersAsync()

    await act(async () => {
      await Promise.resolve()
    })

    await act(async () => {
      await Promise.resolve()
      virtualTrigger.click()
    })

    await vi.runAllTimersAsync()
    // 等待 CSSTransition 执行（需要推进时间，timeout 是 200ms）
    vi.advanceTimersByTime(100)

    // 再次等待 React 渲染完成
    await act(async () => {
      await Promise.resolve()
    })
    const popperAfterClick = container.querySelector('[data-testid="px-tooltip__popper"]')
    expect(popperAfterClick).toBeInTheDocument()

    document.body.removeChild(virtualTrigger)
  })

  // trigger 改变时的测试
  test('change trigger prop', async () => {
    const { container, rerender } = render(
      <Tooltip trigger="hover" content="test">
        <button>trigger</button>
      </Tooltip>
    )

    const trigger = container.querySelector('[data-testid="px-tooltip__trigger"]')

    // 切换到 click
    rerender(
      <Tooltip trigger="click" content="test">
        <button>trigger</button>
      </Tooltip>
    )

    await vi.runAllTimersAsync()
    fireEvent.click(trigger!)

    await vi.runAllTimersAsync()
    await act(async () => {
      await Promise.resolve()
    })
    const popper = container.querySelector('[data-testid="px-tooltip__popper"]')
    expect(popper).toBeInTheDocument()

    // 再次点击关闭
    fireEvent.click(trigger!)
    await vi.runAllTimersAsync()
    await act(async () => {
      await Promise.resolve()
    })
    const popperAfterClose = container.querySelector('[data-testid="px-tooltip__popper"]')
    expect(popperAfterClose).not.toBeInTheDocument()
  })

  test('click-outside disabled when trigger prop is hover', async () => {
    const { container } = render(
      <div>
        <div id="outside">outside</div>
        <Tooltip
          content="hello tooltip"
          trigger="hover"
          onVisibleChange={onVisibleChange}
        >
          <button>trigger</button>
        </Tooltip>
      </div>
    )

    const trigger = container.querySelector('[data-testid="px-tooltip__trigger"]')
    expect(trigger).toBeInTheDocument()

    const popperBeforeHover = container.querySelector('[data-testid="px-tooltip__popper"]')
    expect(popperBeforeHover).not.toBeInTheDocument()

    // 弹出层是否出现
    fireEvent.mouseEnter(trigger!)
    await vi.runAllTimersAsync()
    await act(async () => {
      await Promise.resolve()
    })
    const popper = container.querySelector('[data-testid="px-tooltip__popper"]')
    expect(popper).toBeInTheDocument()

    // trigger:hover 时外层点击不触发关闭
    const outside = container.querySelector('#outside')
    fireEvent.click(outside!)
    await vi.runAllTimersAsync()
    await act(async () => {
      await Promise.resolve()
    })

    const popperAfterOutsideClick = container.querySelector('[data-testid="px-tooltip__popper"]')
    expect(popperAfterOutsideClick).toBeInTheDocument()
  })

  test('change visible prop', async () => {
    const { container, rerender } = render(
      <Tooltip content="test" visible={false}>
        <button>trigger</button>
      </Tooltip>
    )

    const trigger = container.querySelector('[data-testid="px-tooltip__trigger"]')
    expect(trigger).toBeInTheDocument()

    // 悬浮测试显示
    fireEvent.mouseEnter(trigger!)
    await vi.runAllTimersAsync()
    await act(async () => {
      await Promise.resolve()
    })

    const popperNotVisible = container.querySelector('[data-testid="px-tooltip__popper"]')
    expect(popperNotVisible).not.toBeInTheDocument()

    rerender(
      <Tooltip content="test" visible>
        <button>trigger</button>
      </Tooltip>
    )

    const trigger2 = container.querySelector('[data-testid="px-tooltip__trigger"]')
    expect(trigger2).toBeInTheDocument()
    fireEvent.mouseEnter(trigger2!)

    await vi.runAllTimersAsync()
    await act(async () => {
      await Promise.resolve()
    })
    const popperAfterVisible = container.querySelector('[data-testid="px-tooltip__popper"]')
    expect(popperAfterVisible).toBeInTheDocument()
  })
})