import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'

import { PxButton, PxButtonGroup } from '.'

import Button from './Button'
import ButtonGroup from './ButtonGroup'
import Icon from '../Icon/Icon'

describe('Button/index', () => {
  // 测试组件是否被正确导出
  it('component should be exported', () => {
    expect(PxButton).toBe(Button)
  })
})

describe('ButtonGroup/index', () => {
  // 测试组件是否被正确导出
  it('component should be exported', () => {
    expect(PxButtonGroup).toBe(ButtonGroup)
  })
})

describe('Button.tsx', () => {
  // Props: type
  it('should has the correct type class when type prop is set', () => {
    const types = ['primary', 'success', 'warning', 'danger', 'base']
    types.forEach((type) => {
      const { container } = render(<Button type={type as any}>{type}</Button>)
      expect((container.firstChild as HTMLElement).className).toContain(`px-button--${type}`)
    })
  })
  // Props: size
  it('should has the correct size class when size prop is set', () => {
    const sizes = ['large', 'default', 'small']
    sizes.forEach((size) => {
      const { container } = render(<Button size={size as any}>{size}</Button>)
      expect((container.firstChild as HTMLElement).className).toContain(`px-button--${size}`)
    })
  })
  // Props: plain, round circle
  it.each([
    ['plain', 'is-plain'],
    ['round', 'is-round'],
    ['circle', 'is-circle'],
    ['disabled', 'is-disabled'],
    ['loading', 'is-loading']
  ])(
    'should has the correct class when prop %s is set to true',
    (prop, className) => {
      const props = { [prop]: true }
      render(<Button {...props}>Test</Button>)
      const button = screen.getByRole('button')
      expect(button.className).toContain(className)
    }
  )

  it('should has the correct native type attribute when native-type prop is set', () => {
    render(<Button nativeType="submit">Test</Button>)
    const button = screen.getByRole('button')
    expect(button.tagName).toBe('BUTTON')
    expect(button).toHaveAttribute('type', 'submit')
  })
  //! test the click event with and without throttle
  it.each([
    ['withoutThrottle', false],
    ['withThrottle', true]
  ])('emit click event %s', async (_, useThrottle) => {
    const clickSpy = vi.fn()

    render(
      <Button
        onClick={clickSpy}
        useThrottle={useThrottle}
        throttleDuration={400}
      >
        Test
      </Button>
    )

    const button = screen.getByRole('button')

    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)

    expect(clickSpy).toBeCalledTimes(useThrottle ? 1 : 3)
  })

  // Props: tag
  it('should renders the custom tag when tag prop is set', () => {
    const { container } = render(<Button tag="a">Test</Button>)
    expect((container.firstChild as HTMLElement).tagName.toLowerCase()).toBe('a')
  })

  // events: click
  it('should emits a click event when the button is clicked', () => {
    const clickSpy = vi.fn()
    render(<Button onClick={clickSpy}>Test</Button>)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(clickSpy).toHaveBeenCalledTimes(1)
  })

  // expection handling: loading state
  it('should display loading icon and not emit click event when button is loading', () => {
    const clickSpy = vi.fn()
    render(
      <Button
        loading
        loadingIcon="spinner"
        onClick={clickSpy}
      >
        Test
      </Button>
    )

    const button = screen.getByRole('button')
    // loading-icon 存在
    expect(button.querySelector('.loading-icon')).toBeInTheDocument()
    expect(button.className).toContain('is-loading')
    expect(button).toBeDisabled()

    fireEvent.click(button)
    expect(clickSpy).not.toHaveBeenCalled()
  })

  // loading-btn test
  it('loading button', () => {
    const clickSpy = vi.fn()
    render(
      <Button
        loading={true}
        loadingIcon="spinner"
        onClick={clickSpy}
      >
        loading-btn
      </Button>
    )

    const button = screen.getByRole('button')

    // class
    expect(button.className).toContain('is-loading')

    // attrs
    expect(button).toBeDisabled()

    // events
    fireEvent.click(button)
    expect(clickSpy).not.toHaveBeenCalled()

    // icon
    const iconElement = button.querySelector('.loading-icon')
    expect(iconElement).toBeInTheDocument()
  })

  // icon-btn
  it('icon button', () => {
    render(
      <Button icon="search">
        icon button
      </Button>
    )

    const iconElement = screen.getByRole('img')
    expect(iconElement).toBeInTheDocument()
    expect(iconElement.className).toContain('px-icon')
  })

  // icon rotation test
  it('should apply correct styles when rotation is set', () => {
    render(<Icon icon="spinner" rotation={90} />)

    const iconElement = screen.getByRole('img', { hidden: true })

    // ✅ 确保 rotation 被正确应用
    expect(iconElement).toHaveStyle('rotate: 90deg')
  })

  it('should not have rotate style when rotation is not set', () => {
    render(<Icon icon="spinner" />)

    const iconElement = screen.getByRole('img', { hidden: true })

    // ✅ 确保默认情况下没有 rotate
    expect(iconElement).not.toHaveStyle('rotate: 90deg')
  })
})

// button-group test
describe('ButtonGroup.tsx', () => {
  //existing test
  it('basic button group', () => {
    render(
      <ButtonGroup>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    )

    const buttonGroup = screen.getByRole('button-group')
    expect(buttonGroup.className).toContain(`px-button-group`)
  })

  // size prop test
  it('button group size', () => {
    const sizes = ['large', 'default', 'small']
    sizes.forEach((size) => {
      const { container } = render(
        <ButtonGroup size={size as any}>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </ButtonGroup>
      )

      // 找 container 的子元素
      const children = container.firstChild?.childNodes
      expect(children).toHaveLength(2)
      children?.forEach(child => {
        expect((child as HTMLElement).className).toContain(`px-button--${size}`)
      })
    })
  })

  // type prop test
  it('button group type', () => {
    const types = ['base', 'primary', 'success', 'warning', 'danger']
    types.forEach((type) => {
      const { container } = render(
        <ButtonGroup type={type as any}>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
        </ButtonGroup>
      )

      const children = container.firstChild?.childNodes
      expect(children).toHaveLength(2)
      children?.forEach(child => {
        expect((child as HTMLElement).className).toContain(`px-button--${type}`)
      })
    })
  })

  // disabled prop test
  it('button group disabled', () => {
    render(
      <ButtonGroup disabled>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    )

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
      expect(button.className).toContain(`is-disabled`)
    })
  })

  // round prop test
  it('button group round', () => {
    render(
      <ButtonGroup round>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    )

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
      expect(button.className).toContain(`is-round`)
    })
  })

  // circle prop test
  it('button group circle', () => {
    render(
      <ButtonGroup circle>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    )

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
      expect(button.className).toContain(`is-circle`)
    })
  })

  // custom color prop test
  it('button group custom color', () => {
    render(
      <ButtonGroup color="#626aef">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    )

    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
      expect(button.className).toContain(`is-custom`)
    })
  })
})
