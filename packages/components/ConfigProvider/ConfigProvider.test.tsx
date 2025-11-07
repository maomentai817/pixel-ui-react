import { render } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'

import { PxConfigProvider } from '.'
import ConfigProvider from './ConfigProvider'
import Popconfirm from '../Popconfirm/Popconfirm'
import Button from '../Button/Button'

describe('ConfigProvider/index', () => {
  // 测试组件是否被正确导出
  it('component should be exported', () => {
    expect(PxConfigProvider).toBe(ConfigProvider)
  })
})

describe('ConfigProvider hooks', () => {
  beforeEach(() => {
    // 清理全局配置缓存，避免测试间干扰
    vi.resetModules()
  })

  it('config render correctly', () => {
    render((
      <ConfigProvider locale={'en'}>
        <Popconfirm title="Are you shure to delete this item?">
          <Button>Delete</Button>
        </Popconfirm>
      </ConfigProvider>
    ))
    render((
      <ConfigProvider>
        <Popconfirm title="Are you shure to delete this item?">
          <Button>Delete</Button>
        </Popconfirm>
      </ConfigProvider>
    ))
  })

  it('config change should update translations', async () => {
    // 测试当 locale prop 改变时，内部组件的翻译是否正确更新
    const { rerender, queryByText } = render(
      <ConfigProvider locale="en">
        <Popconfirm title="Are you sure?" visible>
          <Button>Delete</Button>
        </Popconfirm>
      </ConfigProvider>
    )

    // 初始 locale 为英文，应该显示英文翻译
    expect(queryByText('Yes')).toBeInTheDocument()
    expect(queryByText('No')).toBeInTheDocument()

    // 更新 locale 为中文
    rerender(
      <ConfigProvider locale="zh-CN">
        <Popconfirm title="Are you sure?" visible>
          <Button>Delete</Button>
        </Popconfirm>
      </ConfigProvider>
    )

    // 应该显示中文翻译
    expect(queryByText('确定')).toBeInTheDocument()
    expect(queryByText('取消')).toBeInTheDocument()
  })

  it('should support custom extendsI18nMsg', () => {
    // 测试自定义扩展消息是否生效
    const customMessages = {
      'popconfirm.confirmButtonText': 'Custom Yes',
      'popconfirm.cancelButtonText': 'Custom No'
    }

    const { queryByText } = render(
      <ConfigProvider locale="en" extendsI18nMsg={customMessages}>
        <Popconfirm title="Are you sure?" visible>
          <Button>Delete</Button>
        </Popconfirm>
      </ConfigProvider>
    )

    // 应该显示自定义消息
    expect(queryByText('Custom Yes')).toBeInTheDocument()
    expect(queryByText('Custom No')).toBeInTheDocument()
  })

  it('should fallback to default locale when invalid locale is provided', () => {
    // 测试无效 locale 时是否回退到默认值
    const { queryByText } = render(
      <ConfigProvider locale={'invalid' as any}>
        <Popconfirm title="Are you sure?" visible>
          <Button>Delete</Button>
        </Popconfirm>
      </ConfigProvider>
    )

    // 应该回退到英文（默认）
    expect(queryByText('Yes')).toBeInTheDocument()
    expect(queryByText('No')).toBeInTheDocument()
  })
})
