// types.button.ts
export const buttonTypes = [
  'primary',
  'success',
  'warning',
  'danger',
  'base',
  'sakura'
] as const
export type ButtonType = (typeof buttonTypes)[number]

export const buttonNativeTypes = ['button', 'submit', 'reset'] as const
export type NativeType = (typeof buttonNativeTypes)[number]

export const buttonSizes = ['large', 'default', 'small'] as const
export type ButtonSize = (typeof buttonSizes)[number]

export interface ButtonProps {
  /**
   * @property id
   * @type string
   * @description 按钮唯一标识
   * @default -
   */
  id?: string
  /**
   * @property size
   * @type enum - large | default | small
   * @description 按钮尺寸
   * @default default
   */
  size?: ButtonSize
  /**
   * @property type
   * @type enum - primary | success | warning | danger | base | sakura
   * @description 按钮类型
   * @default base
   */
  type?: ButtonType
  /**
   * @property plain
   * @type boolean
   * @description 是否为朴素按钮
   * @default false
   */
  plain?: boolean
  /**
   * @property round
   * @type boolean
   * @description 是否为圆角按钮
   * @default false
   */
  round?: boolean
  /**
   * @property circle
   * @type boolean
   * @description 是否为圆形按钮
   * @default false
   */
  circle?: boolean
  /**
   * @property chubby
   * @type boolean
   * @description 另一种圆角样式,可能更圆
   * @default false
   */
  chubby?: boolean
  /**
   * @property loading
   * @type boolean
   * @description 是否为加载中状态
   * @default false
   */
  loading?: boolean
  /**
   * @property loadingIcon
   * @type string
   * @description 自定义加载中状态图标组件
   * @default -
   */
  loadingIcon?: string
  /**
   * @property disabled
   * @type boolean
   * @description 是否禁用按钮
   * @default false
   */
  disabled?: boolean
  /**
   * @property icon
   * @type string
   * @description 按钮图标
   * @default -
   */
  icon?: string
  /**
   * @property autoFocus
   * @type boolean
   * @description 自动聚焦(原生`autoFocus`属性)
   * @default false
   */
  autoFocus?: boolean
  /**
   * @property nativeType
   * @type enum - button | submit | reset
   * @description 原生 type 属性
   * @default button
   */
  nativeType?: NativeType
  /**
   * @property tag
   * @type string
   * @description 自定义元素标签
   * @default button
   */
  tag?: string
  /**
   * @property useThrottle
   * @type boolean
   * @description 是否开启节流
   * @default false
   */
  useThrottle?: boolean
  /**
   * @property throttleDuration
   * @type number
   * @description 节流时间间隔(ms)
   * @default 500
   */
  throttleDuration?: number
  /**
   * @property color
   * @type string
   * @description 自定义颜色
   * @default -
   */
  color?: string
  children?: React.ReactNode
  /**
   * @property onClick
   * @type (event: React.MouseEvent<HTMLButtonElement>) => void
   * @description 按钮点击事件
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /**
   * @property className
   * @type string
   * @description 自定义类名
   */
  className?: string
  style?: React.CSSProperties
}

export interface ButtonExpose {
  disabled: boolean
  size: ButtonSize
  type: ButtonType
}