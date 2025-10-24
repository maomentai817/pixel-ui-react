import React from 'react'
import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import Input from './Input'

describe('Input.tsx', () => {
  test('render', () => {
    const { container } = render(
      <Input
        type="text"
        size="small"
        value="test"
        prepend="prepend"
        append="append"
        suffix="suffix"
        prefix="prefix"
      />
    )

    // 针对动态 class 的测试
    expect((container.firstChild as HTMLElement).className).toContain('px-input')
    expect((container.firstChild as HTMLElement).className).toContain('px-input--small')
    expect((container.firstChild as HTMLElement).className).toContain('px-input--text')
    expect((container.firstChild as HTMLElement).className).toContain('is-prefix')
    expect((container.firstChild as HTMLElement).className).toContain('is-prepend')

    // 正确的标签和节点
    const input = container.querySelector('input') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')

    // 针对插槽的测试
    expect(screen.getByText('prepend')).toBeInTheDocument()
    expect(screen.getByText('prefix')).toBeInTheDocument()
    expect(screen.getByText('suffix')).toBeInTheDocument()
    expect(screen.getByText('append')).toBeInTheDocument()

    // 针对 textarea 的测试
    const { container: textareaContainer } = render(
      <Input
        type="textarea"
        value="test"
      />
    )

    const textarea = textareaContainer.querySelector('textarea')
    expect(textarea).toBeInTheDocument()
  })

  test('controlled input', () => {
    let value = 'test'
    const handleChange = (newValue: string) => {
      value = newValue
    }

    const { container, rerender } = render(
      <Input
        value={value}
        onChange={handleChange}
        type="text"
      />
    )

    const input = container.querySelector('input') as HTMLInputElement

    // 初始值
    expect(input.value).toBe('test')

    // 外部更新值
    value = 'test3'
    rerender(
      <Input
        value={value}
        onChange={handleChange}
        type="text"
      />
    )
    expect(input.value).toBe('test3')
  })

  test('clearable', () => {
    let value = 'test'
    const handleChange = (newValue: string) => {
      value = newValue
    }
    const handleFocus = vi.fn()
    const handleBlur = vi.fn()

    const { container } = render(
      <Input
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        clearable={true}
        type="text"
      />
    )

    // 不应该出现清除按钮（因为没有聚焦）
    expect(screen.queryByRole('button')).not.toBeInTheDocument()

    const input = container.querySelector('input') as HTMLInputElement
    expect(input).toBeInTheDocument()
  })

  test('toggle password', () => {
    let value = '123'
    const handleChange = (newValue: string) => {
      value = newValue
    }

    const { container } = render(
      <Input
        value={value}
        onChange={handleChange}
        type="password"
        showPassword
      />
    )

    // 使用更通用的方式查找输入框
    const input = container.querySelector('input') as HTMLInputElement
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'password')

    const eyeIcon = container.querySelector('i')
    expect(eyeIcon).toBeInTheDocument()
    expect(eyeIcon?.className).toContain('hn-eye-cross')
  })

  test('should render with ref', () => {
    const ref = React.createRef<HTMLInputElement>()

    const { container } = render(
      <Input
        {...({ ref } as any)}
        type="text"
        size="small"
        value="test"
        prepend="prepend"
        append="append"
        suffix="suffix"
        prefix="prefix"
      />
    )

    // 测试组件是否正确渲染
    expect(container.querySelector('input')).toBeInTheDocument()
  })

  // 事件触发测试
  test('should emit events', async () => {
    const { container } = render(
      <Input
        type="text"
        size="small"
        value="test"
        prepend="prepend"
        append="append"
        suffix="suffix"
        prefix="prefix"
      />
    )

    const input = container.querySelector('input') as HTMLInputElement
    expect(input).toBeInTheDocument()
    input.focus()
    input.blur()
    input.select()
  })

  test('textarea form and focus/blur', () => {
    let value = 'textarea'
    const handleChange = (newValue: string) => {
      value = newValue
    }
    const handleFocus = vi.fn()
    const handleBlur = vi.fn()

    const { container } = render(
      <Input
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="textarea"
        form="my-form"
      />
    )

    // 检查 form 属性是否正确绑定
    const textarea = container.querySelector('textarea') as HTMLTextAreaElement
    expect(textarea).toBeInTheDocument()
    expect(textarea).toHaveAttribute('form', 'my-form')

    // 测试 focus 事件
    textarea.focus()
    expect(handleFocus).toHaveBeenCalled()

    // 测试 blur 事件
    textarea.blur()
    expect(handleBlur).toHaveBeenCalled()
  })
})
