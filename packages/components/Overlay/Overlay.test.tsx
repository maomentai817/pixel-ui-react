import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'

import { PxOverlay } from '.'
import Overlay from './Overlay'

describe('Overlay/index', () => {
  // 测试组件是否被正确导出
  it('component should be exported', () => {
    expect(PxOverlay).toBe(Overlay)
  })
})

describe('PxOverlay', () => {
  it('should render with default props (mask = true, zIndex = 2000)', () => {
    const { container } = render(<PxOverlay className="test-overlay" open />)

    expect(container.querySelector('.test-overlay')).toBeInTheDocument()
    expect(container.querySelector('.test-overlay')?.getAttribute('style')).toContain('z-index: 2000')
  })

  it('should render without mask and use fixed position', () => {
    const { container } = render(<PxOverlay className="test-overlay" open mask={false} zIndex={3000} lockScroll={false} />)
    expect(container.querySelector('.test-overlay')).toBeInTheDocument()
    expect(container.querySelector('.test-overlay')?.getAttribute('style')).toContain('z-index: 3000')
  })

  it('should apply overlayClass as string', () => {
    const { container } = render(<PxOverlay className="test-overlay" open overlayClass="custom-class" />)
    expect(container.querySelector('.test-overlay')).toBeInTheDocument()
    expect(container.querySelector('.test-overlay')?.classList.contains('custom-class')).toBe(true)
  })

  it('should apply overlayClass as array', () => {
    const { container } = render(<PxOverlay className="test-overlay" open overlayClass={['class-a', 'class-b']} />)
    expect(container.querySelector('.test-overlay')).toBeInTheDocument()
    expect(container.querySelector('.test-overlay')?.classList.contains('class-a')).toBe(true)
    expect(container.querySelector('.test-overlay')?.classList.contains('class-b')).toBe(true)
  })

  it('should emit click event when backdrop clicked', async () => {
    const onClick = vi.fn()
    const { container } = render(<PxOverlay className="test-overlay" open setOpen={onClick} backdropClose></PxOverlay>)
    await fireEvent.click(container.querySelector('.test-overlay') as HTMLElement)
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClick.mock.calls[0][0]).toBe(false)
  })

  it('should render slot content', () => {
    const { container } = render(<PxOverlay className="test-overlay" open><p className="slot-content">Hello</p></PxOverlay>)
    expect(container.querySelector('.slot-content')).toBeInTheDocument()
    expect(container.querySelector('.slot-content')?.textContent).toBe('Hello')
  })

  it('should unlock scroll when unmounted', async () => {
    render(<PxOverlay className="test-overlay" open lockScroll mask />)
    expect(document.body?.getAttribute('style')).toContain('overflow: hidden')
    render(<PxOverlay className="test-overlay" lockScroll mask />)
    expect(document.body?.getAttribute('style')).not.toContain('overflow: hidden')
  })
})
