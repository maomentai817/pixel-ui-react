import { memo, useMemo, useCallback, useContext, forwardRef, useImperativeHandle } from 'react'
import type { JSX } from 'react'
import { throttle } from 'lodash-es'

import { usePxButtonCustomStyle } from '@pixel-ui-react/hooks'
import { PxIcon } from '../Icon'

import { ButtonGroupContext } from './context'
import type { ButtonProps } from './types.button'
import type { ButtonGroupProps } from './types.buttonGroup'
import styles from './style.module.css'

const Button: React.FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref: React.Ref<HTMLButtonElement>): React.ReactElement => {
  const {
    size,
    type = 'base',
    plain,
    round,
    circle,
    chubby,
    loading,
    loadingIcon = 'spinner',
    disabled,
    icon,
    autoFocus,
    nativeType = 'button',
    tag = 'button',
    useThrottle = true,
    throttleDuration = 500,
    color,
    onClick,
    className,
    style,
    children
  } = props
  const context = useContext(ButtonGroupContext) as ButtonGroupProps
  // 优先级：ButtonGroup 设置 > Button 自身 props > 默认值
  const sizeValue = useMemo(() => context?.size ?? size ?? 'default', [context?.size, size])
  const typeValue = useMemo(() => context?.type ?? type ?? '', [context?.type, type])
  const disabledValue = useMemo(() => context?.disabled ?? disabled ?? false, [context?.disabled, disabled])
  const roundValue = useMemo(() => context?.round ?? round ?? false, [context?.round, round])
  const circleValue = useMemo(() => context?.circle ?? circle ?? false, [context?.circle, circle])
  const colorValue = useMemo(() => context?.color ?? color, [context?.color, color])

  // 服务于单个圆形icon
  const iconStyle = useMemo(() => ({
    marginRight: children ? '6px' : '0px'
  }), [children])

  // 自定义颜色
  const colorStyle = usePxButtonCustomStyle(props, colorValue)

  const Tag = tag as keyof JSX.IntrinsicElements

  const classNames = [
    className,
    styles['px-button'],
    typeValue ? styles[`px-button--${typeValue}`] : '',
    sizeValue ? styles[`px-button--${sizeValue}`] : '',
    plain ? styles['is-plain'] : '',
    roundValue ? styles['is-round'] : '',
    circleValue ? styles['is-circle'] : '',
    chubby ? styles['is-chubby'] : '',
    disabledValue ? styles['is-disabled'] : '',
    loading ? styles['is-loading'] : '',
    colorValue ? styles['is-custom'] : '',
  ].filter(Boolean).join(' ')

  // 点击节流逻辑
  const handleBtnClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e)
  }, [onClick])

  // 节流点击处理函数
  const handleBtnClickThrottle = useMemo(
    () => throttle(handleBtnClick, throttleDuration, { trailing: false }),
    [handleBtnClick, throttleDuration]
  )

  useImperativeHandle(ref, (): HTMLButtonElement => {
    return {
      disabled: disabledValue,
      size: sizeValue,
      type: typeValue
    } as any
  })

  if (tag === 'button') {
    return (
      <button
        ref={ref}
        className={classNames}
        autoFocus={autoFocus}
        type={nativeType}
        disabled={disabledValue || loading}
        style={{ ...colorStyle, ...(style || {}) }}
        role="button"
        onClick={(e) =>
          useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)}
      >
        {loading ? (
          <PxIcon
            className="loading-icon"
            spin
            icon={loadingIcon}
            style={iconStyle}
          />
        ) : null}

        {icon && !loading ? (
          <PxIcon
            icon={icon}
            style={iconStyle}
          />
        ) : null}

        {children ? (
          <span>
            {children}
          </span>
        ) : null}
      </button>
    )
  }

  return (
    <Tag
      className={classNames}
      style={{ ...colorStyle, ...(style || {}) }}
      role="button"
      disabled={disabledValue || loading}
      onClick={(e) =>
        useThrottle ? handleBtnClickThrottle(e as React.MouseEvent<HTMLButtonElement>) : handleBtnClick(e as React.MouseEvent<HTMLButtonElement>)}
    >
      {loading ? (
        <PxIcon
          className={'loading-icon'}
          icon={loadingIcon}
          style={iconStyle}
        />
      ) : null}

      {icon && !loading ? (
        <PxIcon
          icon={icon}
          style={iconStyle}
        />
      ) : null}

      {children ? (
        <span>
          {children}
        </span>
      ) : null}
    </Tag>
  )
})

Button.displayName = 'PxButton'

export default memo(Button)