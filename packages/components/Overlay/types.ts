export interface OverlayProps {
  /**
   * @property open
   * @type boolean
   * @description 是否打开
   * @default false
   */
  open?: boolean
  /**
   * @property setOpen
   * @type (open: boolean) => void
   * @description 设置是否打开
   * @default false
   */
  setOpen?: (open: boolean) => void
  /**
   * @property backdropClose
   * @type boolean
   * @description 是否在点击遮罩层时关闭
   * @default false
   */
  backdropClose?: boolean
  /**
   * @property mask
   * @type boolean
   * @description 是否显示遮罩层(仅为样式上的区分, 控制使用 v-if)
   * @default true
   */
  mask?: boolean
  /**
   * @property zIndex
   * @type number
   * @description 层级
   * @default 2000
   */
  zIndex?: number
  /**
   * @property overlayClass
   * @type {string | string[]}
   * @description 遮罩层类
   * @default -
   */
  overlayClass?: string | string[]
  /**
   * @property lockScroll
   * @type boolean
   * @description 是否锁定滚动
   * @default true
   */
  lockScroll?: boolean
  /**
   * @property color
   * @type string
   * @description 默认遮罩层自定义颜色
   * @default -
   */
  color?: string
  /**
   * @property grid
   * @type boolean
   * @description 网格背景默认
   * @default false
   */
  grid?: boolean
  /**
   * @property matte
   * @type boolean
   * @description 是否开启哑光
   * @default false
   */
  matte?: boolean
  /**
   * @property preset1
   * @type boolean
   * @description 网格背景预设-1
   */
  preset1?: boolean
  className?: string
  children?: React.ReactNode
}