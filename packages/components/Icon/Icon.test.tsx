import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PxIcon } from '.'

import Icon from './Icon'

describe('Icon/index', () => {
  // 测试组件是否被正确导出
  it('component should be exported', () => {
    expect(PxIcon).toBe(Icon)
  })
})

describe('Icon.tsx', () => {
  // 渲染 icon 组件
  it('renders icon with correct class', () => {
    render(<Icon icon="star" />)

    expect(screen.getByRole('img').className).toContain('px-icon')
    expect(screen.getByRole('img').className).toContain('hn')
    expect(screen.getByRole('img').className).toContain('hn-star')
  })

  // size prop 测试
  it('applies correct size style', () => {
    render(<Icon icon="star" size={24} />)

    expect(screen.getByRole('img')).toHaveStyle('font-size: 24px')
  })

  // color prop 测试
  it('applies correct color style', () => {
    render(<Icon icon="star" color="#ff0000" />)

    expect(screen.getByRole('img')).toHaveStyle(
      '--px-icon-color: #ff0000; font-size: 14px;'
    )
  })

  // rotation prop 测试
  it('applies correct rotation style', () => {
    render(<Icon icon="star" rotation={45} />)

    expect(screen.getByRole('img')).toHaveStyle('rotate: 45deg')
  })

  // flip prop 测试
  it('applies correct flip class', () => {
    render(<Icon icon="star" flip="horizontal" />)

    expect(screen.getByRole('img').className).toContain('px-icon--horizontal')
  })

  // spin prop 测试
  it('applies spin animation when spin is true', () => {
    render(<Icon icon="star" spin />)

    expect(screen.getByRole('img').className).toContain('is-spin')
  })

  // bounce prop 测试
  it('applies bounce animation when bounce is true', () => {
    render(<Icon icon="star" bounce />)

    expect(screen.getByRole('img').className).toContain('is-bounce')
  })

  // shake prop 测试
  it('applies shake animation when shake is true', () => {
    render(<Icon icon="star" shake />)

    expect(screen.getByRole('img').className).toContain('is-shake')
  })

  // beat prop 测试
  it('applies beat animation when beat is true', () => {
    render(<Icon icon="star" beat />)

    expect(screen.getByRole('img').className).toContain('is-beat')
  })

  // type prop 测试
  it('applies correct type class', () => {
    render(<Icon icon="star" type="success" />)

    expect(screen.getByRole('img').className).toContain('px-icon--success')
  })
})
