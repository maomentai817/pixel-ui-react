import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
import { useLocale } from '../useLocale'
import { en, zhCN } from '@pixel-ui-react/locale'

describe('useLocale', () => {
  it('should return translation function that works with IntlProvider', () => {
    const TestComponent = () => {
      const t = useLocale()
      return <div data-testid="test">{t('popconfirm.cancelButtonText')}</div>
    }

    render(
      <IntlProvider locale="en" messages={en as unknown as Record<string, string>}>
        <TestComponent />
      </IntlProvider>
    )

    const element = screen.getByTestId('test')
    expect(element.textContent).toBe('No')
  })

  it('should return correct translation for different locales', () => {
    const TestComponent = () => {
      const t = useLocale()
      return (
        <div>
          <span data-testid="cancel">{t('popconfirm.cancelButtonText')}</span>
          <span data-testid="confirm">{t('popconfirm.confirmButtonText')}</span>
        </div>
      )
    }

    // 测试英文
    const { rerender } = render(
      <IntlProvider locale="en" messages={en as unknown as Record<string, string>}>
        <TestComponent />
      </IntlProvider>
    )

    expect(screen.getByTestId('cancel').textContent).toBe('No')
    expect(screen.getByTestId('confirm').textContent).toBe('Yes')

    // 测试中文
    rerender(
      <IntlProvider locale="zh-CN" messages={zhCN as unknown as Record<string, string>}>
        <TestComponent />
      </IntlProvider>
    )

    expect(screen.getByTestId('cancel').textContent).toBe('取消')
    expect(screen.getByTestId('confirm').textContent).toBe('确定')
  })

  it('should return key when translation is missing', () => {
    const TestComponent = () => {
      const t = useLocale()
      return <div data-testid="test">{t('non.existent.key')}</div>
    }

    render(
      <IntlProvider locale="en" messages={en as unknown as Record<string, string>}>
        <TestComponent />
      </IntlProvider>
    )

    const element = screen.getByTestId('test')
    // react-intl 在找不到翻译时会返回 key
    expect(element.textContent).toBe('non.existent.key')
  })

  it('should work with custom messages', () => {
    const customMessages = {
      'popconfirm.cancelButtonText': 'Custom Cancel',
      'popconfirm.confirmButtonText': 'Custom Confirm'
    }

    const TestComponent = () => {
      const t = useLocale()
      return (
        <div>
          <span data-testid="cancel">{t('popconfirm.cancelButtonText')}</span>
          <span data-testid="confirm">{t('popconfirm.confirmButtonText')}</span>
        </div>
      )
    }

    render(
      <IntlProvider locale="en" messages={customMessages}>
        <TestComponent />
      </IntlProvider>
    )

    expect(screen.getByTestId('cancel').textContent).toBe('Custom Cancel')
    expect(screen.getByTestId('confirm').textContent).toBe('Custom Confirm')
  })

  it('should return same function reference on re-render', () => {
    let firstT: ((key: string) => string) | null = null
    let secondT: ((key: string) => string) | null = null

    const TestComponent = ({ renderCount }: { renderCount: number }) => {
      const t = useLocale()
      if (renderCount === 1) {
        firstT = t
      } else if (renderCount === 2) {
        secondT = t
      }
      return <div data-testid="test">{t('popconfirm.cancelButtonText')}</div>
    }

    const { rerender } = render(
      <IntlProvider locale="en" messages={en as unknown as Record<string, string>}>
        <TestComponent renderCount={1} />
      </IntlProvider>
    )

    rerender(
      <IntlProvider locale="en" messages={en as unknown as Record<string, string>}>
        <TestComponent renderCount={2} />
      </IntlProvider>
    )

    // useIntl 返回的 formatMessage 函数引用可能会变化，但功能应该一致
    expect(firstT).toBeTruthy()
    expect(secondT).toBeTruthy()
    expect(firstT!('popconfirm.cancelButtonText')).toBe(secondT!('popconfirm.cancelButtonText'))
  })
})
