export const inputSizes = ['small', 'default', 'large'] as const
export type InputSize = (typeof inputSizes)[number]

export interface InputProps {
  /**
   * @property id
   * @type string
   * @description 输入框唯一标识
   * @default -
   */
  id?: string
  /**
   * @property value
   * @type string
   * @description 输入框绑定值
   * @default -
   */
  value?: string | readonly string[] | undefined
  /**
   * @property type
   * @type string
   * @description 输入框类型
   * @default text
   */
  type?: string
  /**
   * @property size
   * @type enum - small | default | large
   * @description 输入框尺寸
   * @default default
   */
  size?: InputSize
  /**
   * @property disabled
   * @type boolean
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean
  /**
   * @property clearable
   * @type boolean
   * @description 是否显示清除按钮
   * @default false
   */
  clearable?: boolean
  /**
   * @property showPassword
   * @type boolean
   * @description 是否显示切换密码图标
   * @default false
   */
  showPassword?: boolean
  /**
   * @property placeholder
   * @type string
   * @description 输入框占位符
   * @default -
   */
  placeholder?: string
  /**
   * @property readonly
   * @type boolean
   * @description 原生`readonly`属性, 是否只读
   * @default false
   */
  readonly?: boolean
  /**
   * @property autocomplete
   * @type string
   * @description 原生`autocomplete`属性
   * @default off
   */
  autocomplete?: string
  /**
   * @property autofocus
   * @type boolean
   * @description 原生`autofocus`属性, 是否自动获取焦点
   * @default false
   */
  autofocus?: boolean
  /**
   * @property form
   * @type string
   * @description 原生`form`属性, 指定输入框所属的表单
   * @default -
   */
  form?: string
  /**
   * @property prefix
   * @description 输入框头部内容
   */
  prefix?: React.ReactNode
  /**
   * @property suffix
   * @description 输入框尾部内容
   */
  suffix?: React.ReactNode
  /**
   * @property prepend
   * @description 输入框前置内容
   */
  prepend?: React.ReactNode
  /**
   * @property append
   * @description 输入框后置内容
   */
  append?: React.ReactNode
  /**
   * @property rows
   * @description 输入框行数
   * @default 1
   */
  rows?: number
  /**
   * @property cols
   * @description 输入框列数
   * @default -
   */
  cols?: number
  /**
   * @property wrap
   * @description 输入框换行方式
   * @default soft
   */
  wrap?: 'hard' | 'soft' | 'off'
  /**
   * @property maxLength
   * @description 输入框最大长度
   * @default -
   */
  maxLength?: number
  /**
   * @property minLength
   * @description 输入框最小长度
   * @default -
   */
  minLength?: number
  onChange?: (value: string) => void
  onInput?: (value: string) => void
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void
  className?: string
  style?: React.CSSProperties
}

export interface InputExpose {
  focus: () => void
  blur: () => void
  select: () => void
  clear: (event: React.MouseEvent<HTMLElement>) => void
}