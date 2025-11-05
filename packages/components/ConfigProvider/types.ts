export interface ConfigProviderProps {
  /**
   * @property locale
   * @type string
   * @description 语言
   * @default en
   */
  locale?: Locale
  /**
   * @property extendsI18nMsg
   * @type Record<string, string>
   * @description 扩展翻译文本对象
   * @default {}
   */
  extendsI18nMsg?: Record<string, string>
  children?: React.ReactNode
}

export type Locale = 'en' | 'zh-CN' | 'zh-TW' | 'ja'