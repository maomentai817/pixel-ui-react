import { render, fireEvent } from '@testing-library/react'
import { act } from 'react'
import { describe, it, expect, test, vi, beforeEach } from 'vitest'

import { PxPopconfirm, type PopconfirmProps } from '.'
import Popconfirm from './Popconfirm'

describe('Popconfirm/index', () => {
  // 测试组件是否被正确导出
  it('component should be exported', () => {
    expect(PxPopconfirm).toBe(Popconfirm)
  })
})

const onConfirm = vi.fn()
const onCancel = vi.fn()

describe('Popconfirm', () => {
  const props = {
    title: 'Test Title',
    confirmButtonText: 'Confirm',
    cancelButtonText: 'Cancel',
    confirmButtonType: 'primary',
    cancelButtonType: 'base',
    icon: 'check-circle',
    iconColor: 'green',
    hideIcon: false,
    hideTimeout: 500,
    width: 200,
    visible: true
  } as PopconfirmProps

  beforeEach(() => {
    vi.useFakeTimers()
    vi.clearAllMocks()
  })

  // 测试组件的属性
  it('should accept all props', async () => {
    const { container } = render(
      <Popconfirm {...props}>
        <button>trigger</button>
      </Popconfirm>
    )
    // 等待渲染和动画完成
    await vi.runAllTimersAsync()
    vi.advanceTimersByTime(100)

    // 等待 React 渲染完成
    await act(async () => {
      await Promise.resolve()
    })

    let popconfirm = container.querySelector('[data-testid="px-popconfirm"]')
    if (!popconfirm) {
      vi.advanceTimersByTime(100)
      await act(async () => {
        await Promise.resolve()
      })
      popconfirm = container.querySelector('[data-testid="px-popconfirm"]')
    }
    expect(popconfirm).toBeInTheDocument()

    // 验证 props 是否正确渲染到 DOM
    expect(popconfirm?.textContent).toContain('Test Title')
    expect(popconfirm?.textContent).toContain('Confirm')
    expect(popconfirm?.textContent).toContain('Cancel')

    // 验证按钮是否存在
    const confirmBtn = popconfirm?.querySelector('#px-popconfirm__confirm')
    const cancelBtn = popconfirm?.querySelector('#px-popconfirm__cancel')
    expect(confirmBtn).toBeInTheDocument()
    expect(cancelBtn).toBeInTheDocument()
  })

  // 事件测试
  test('popconfirm emits', async () => {
    const { container } = render((
      <div>
        <div id="outside"></div>
        <Popconfirm
          title="test title"
          hideIcon={true}
          onConfirm={onConfirm}
          onCancel={onCancel}
        >
          <button id="trigger">trigger</button>
        </Popconfirm>
      </div>
    ))

    // 触发唤出弹层
    const triggerNode = container.querySelector('#trigger')
    expect(triggerNode).toBeInTheDocument()

    fireEvent.click(triggerNode!)
    await vi.runAllTimers()
    expect(container.querySelector('[data-testid="px-popconfirm"]')).toBeInTheDocument()

    // confirm 测试逻辑
    const confirmBtn = container.querySelector('#px-popconfirm__confirm')
    expect(confirmBtn).toBeInTheDocument()

    fireEvent.click(confirmBtn!)
    await vi.runAllTimers()
    await act(async () => {
      await Promise.resolve()
    })
    expect(container.querySelector('[data-testid="px-popconfirm"]')).not.toBeInTheDocument()
    expect(onConfirm).toBeCalled()

    // 重新唤出
    fireEvent.click(triggerNode!)
    await vi.runAllTimers()
    await act(async () => {
      await Promise.resolve()
    })
    expect(container.querySelector('[data-testid="px-popconfirm"]')).toBeInTheDocument()

    // cancel 测试逻辑
    const cancelBtn = container.querySelector('#px-popconfirm__cancel')
    expect(cancelBtn).toBeInTheDocument()

    fireEvent.click(cancelBtn!)
    await vi.runAllTimers()
    await act(async () => {
      await Promise.resolve()
    })
    expect(container.querySelector('[data-testid="px-popconfirm"]')).not.toBeInTheDocument()
    expect(onCancel).toBeCalled()
  })
})
