import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { PxText } from '.'
import Text from './Text'

describe('Text/index', () => {
  // 测试组件是否被正确导出
  it('component should be exported', () => {
    expect(PxText).toBe(Text)
  })
})

describe('Text.tsx', () => {
  // 测试 children
  it('should render children correctly', () => {
    render(<Text>Hello, World!</Text>)
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  })

  // 测试组件类型
  it('should be a memoized component', () => {
    // React.memo 会返回一个特殊的组件类型
    expect(Text).toHaveProperty('displayName')
  })

  // size prop test
  it('applies the correct font size', () => {
    render(<Text size={20}>Test Text</Text>)
    expect(screen.getByText('Test Text')).toHaveStyle('font-size: 20px')
  })

  // color prop test
  it('applies the correct text color', () => {
    render(<Text color="#ff0000">Test Text</Text>)
    expect(screen.getByText('Test Text')).toHaveStyle('color: #ff0000')
  })

  // bold prop test
  it('renders bold text when bold is true', () => {
    render(<Text bold>Test Text</Text>)
    expect(screen.getByText('Test Text')).toHaveStyle('font-weight: bold')
  })

  // align prop test
  it('applies the correct text alignment', () => {
    render(<Text align="center">Test Text</Text>)
    expect(screen.getByText('Test Text')).toHaveStyle('text-align: center')
  })

  // type prop test
  it('applies the correct class based on type', () => {
    render(<Text type="success">Test Text</Text>)
    expect(screen.getByText('Test Text').className).toContain('px-text--success')
  })

  // compact prop test
  it('applies compact class when compact is true', () => {
    render(<Text compact>Test Text</Text>)
    expect(screen.getByText('Test Text').className).toContain('is-compact')
  })

  // tag prop test
  it('renders correct tag when tag prop is set', () => {
    render(<Text tag="h1">Heading 1</Text>)
    const element = screen.getByText('Heading 1')
    expect(element.tagName).toBe('H1')
  })
})
