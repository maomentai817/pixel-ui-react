import { useMemo } from 'react'
import type { JSX } from 'react'
import { IntlProvider } from 'react-intl'
import { merge } from 'lodash-es'
import { en, zhCN, zhTW, ja } from '@pixel-ui-react/locale'

import { ConfigProviderContext } from './context'
import type { ConfigProviderProps } from './types'

const ConfigProvider = (props: ConfigProviderProps): JSX.Element => {
  const {
    locale = 'en',
    extendsI18nMsg = {},
    children
  } = props

  // 验证 locale 是否有效，无效时回退到 'en'
  const validLocale = useMemo(() => {
    const supportedLocales = ['en', 'zh-CN', 'zh-TW', 'ja']
    return supportedLocales.includes(locale) ? locale : 'en'
  }, [locale])

  const mergedMessages = useMemo(() => {
    const messages = {
      en: en,
      'zh-CN': zhCN,
      'zh-TW': zhTW,
      ja: ja
    }
    const baseMessages = messages[validLocale] // fallback to English
    return merge({}, baseMessages, extendsI18nMsg)
  }, [validLocale, extendsI18nMsg])

  return (
    <ConfigProviderContext.Provider value={{ locale: validLocale, _InConfigProvider: true }}>
      <IntlProvider locale={validLocale} messages={mergedMessages}>
        {children}
      </IntlProvider>
    </ConfigProviderContext.Provider>
  )
}

export default ConfigProvider