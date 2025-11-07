import type { ButtonType } from '../Button'
import type { Placement } from '@popperjs/core'

export interface PopconfirmProps {
  /**
   * @property visible
   * @type boolean
   * @description 是否显示
   * @default false
   */
  visible?: boolean
  /**
   * @property title
   * @type React.ReactNode
   * @description 确认框标题
   * @default -
   */
  title: React.ReactNode
  /**
   * @property content
   * @type React.ReactNode
   * @description 提示内容
   * @default -
   */
  content?: React.ReactNode
  /**
   * @property placement
   * @type enum - top | top-start | top-end | bottom | bottom-start | bottom-end | left | left-start | left-end | right | right-start | right-end
   * @description 提示出现位置
   * @default bottom
   */
  placement?: Placement
  /**
   * @property confirmButtonText
   * @type string
   * @description 确认按钮文字
   * @default Yes
   */
  confirmButtonText?: string
  /**
   * @property cancelButtonText
   * @type string
   * @description 取消按钮文字
   * @default No
   */
  cancelButtonText?: string
  /**
   * @property confirmButtonType
   * @type enum - primary | success | warning | danger | base | sakura
   * @description 确认按钮类型
   * @default primary
   */
  confirmButtonType?: ButtonType
  /**
   * @property cancelButtonType
   * @type enum - primary | success | warning | danger | base | sakura
   * @description 取消按钮类型
   * @default -
   */
  cancelButtonType?: ButtonType
  /**
   * @property icon
   * @type string
   * @description 自定义图标
   * @default question-solid
   */
  icon?: string
  /**
   * @property iconColor
   * @type string
   * @description 图标颜色
   * @default #f90
   */
  iconColor?: string
  /**
   * @property hideIcon
   * @type boolean
   * @description 是否隐藏图标
   * @default false
   */
  hideIcon?: boolean
  /**
   * @property hideTimeout
   * @type number
   * @description 关闭延时
   * @default 200
   */
  hideTimeout?: number
  /**
   * @property width
   * @type {number | string}
   * @description 弹层宽度,最小宽度150px
   * @default 200
   */
  width?: number | string
  /**
   * @property actions
   * @type React.ReactNode
   * @description 操作按钮
   * @default -
   */
  actions?: React.ReactNode
  children?: React.ReactNode,
  onVisibleChange?: (visible: boolean) => void,
  onConfirm?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void
}