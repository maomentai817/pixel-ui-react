import type { Placement, Options } from '@popperjs/core'

export const triggerTypes = ['hover', 'click', 'contextmenu'] as const
export type TriggerType = (typeof triggerTypes)[number]

export const effectTypes = ['dark', 'light', 'customized'] as const
export type EffectType = (typeof effectTypes)[number]

export interface TooltipProps {
  /**
   * @property content
   * @type string
   * @description 提示内容, 可被`slot#content`覆盖
   * @default -
   */
  content?: string
  /**
   * @property trigger
   * @type enum - hover | click | contextmenu
   * @description 触发方式
   * @default hover
   */
  trigger?: TriggerType
  /**
   * @property placement
   * @type enum - top | top-start | top-end | bottom | bottom-start | bottom-end | left | left-start | left-end | right | right-start | right-end
   * @description 提示出现位置
   * @default bottom
   */
  placement?: Placement
  /**
   * @property visible
   * @type boolean
   * @description 是否显示
   * @default -
   */
  visible?: boolean
  /**
   * @property disabled
   * @type boolean
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean
  /**
   * @property popperOptions
   * @type {Partial<Options>}
   * @description popperjs 配置
   * @default {}
   */
  popperOptions?: Partial<Options>
  /**
   * @property effect
   * @type enum - dark | light | customized
   * @description 主题样式
   * @default light
   */
  effect?: EffectType
  /**
   * @property showTimeout
   * @type number
   * @description 显示延时
   * @default 0
   */
  showTimeout?: number
  /**
   * @property hideTimeout
   * @type number
   * @description 隐藏延时
   * @default 200
   */
  hideTimeout?: number
  onVisibleChange?: (visible: boolean) => void
  /**
   * @property virtualTriggering
   * @type boolean
   * @description 是否虚拟触发
   * @default false
   */
  virtualTriggering?: boolean
  /**
   * @property virtualRef
   * @type React.RefObject<unknown>
   * @description 虚拟触发节点
   * @default -
   */
  virtualRef?: React.RefObject<unknown>
  children?: React.ReactNode
}
