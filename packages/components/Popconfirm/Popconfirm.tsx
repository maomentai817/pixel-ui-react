import { memo, useCallback, useMemo, useState, useEffect } from 'react'
import type { JSX } from 'react'
import { addUnit } from '@pixel-ui-react/utils'
import { useI18n } from '../ConfigProvider/hooks'

import { PxTooltip } from '../Tooltip'
import { PxButton } from '../Button'
import { PxIcon } from '../Icon'

import styles from './style.module.css'

import type { PopconfirmProps } from './types'

const Popconfirm = (props: PopconfirmProps): JSX.Element => {
  const {
    title,
    placement,
    confirmButtonText,
    cancelButtonText,
    confirmButtonType = 'primary',
    cancelButtonType,
    icon = 'question-solid',
    iconColor = '#f90',
    hideIcon,
    hideTimeout = 200,
    width = 200,
    actions,
    visible,
    onVisibleChange,
    onConfirm,
    onCancel,
    children
  } = props

  const [innerVisible, setInnerVisible] = useState(false)
  const t = useI18n()

  const style = useMemo(() => ({ width: addUnit(props.width) }), [width])

  const handleSetInnerVisible = useCallback((_visible: boolean) => {
    if (visible === void 0) {
      setInnerVisible(_visible)
      onVisibleChange?.(_visible)
    }
  }, [visible])

  const handleCancel = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    onCancel?.(e)
    handleSetInnerVisible(false)
  }, [])
  const handleConfirm = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    onConfirm?.(e)
    handleSetInnerVisible(false)
  }, [])
  const handleVisibleChange = useCallback((visible: boolean) => {
    onVisibleChange?.(visible)
  }, [onVisibleChange])

  const classNames = [
    'px-popconfirm',
    styles['px-popconfirm'],
  ].filter(Boolean).join(' ')

  const captureContent = useMemo(() => {
    return (
      <div className={classNames} style={style} data-testid="px-popconfirm">
        <div className={styles['px-popconfirm__main']}>
          {!hideIcon && icon ? (
            <PxIcon
              icon={icon}
              color={iconColor}
              size={20}
            />
          ) : null}
          {title}
        </div>
        <div className={styles['px-popconfirm__action']}>
          {actions || (
            <>
              <PxButton
                id="px-popconfirm__cancel"
                className={styles['px-popconfirm__cancel']}
                size="small"
                type={cancelButtonType}
                onClick={handleCancel}
              >
                {cancelButtonText || t('popconfirm.cancelButtonText')}
              </PxButton>
              <PxButton
                id="px-popconfirm__confirm"
                className={styles['px-popconfirm__confirm']}
                size="small"
                type={confirmButtonType}
                onClick={handleConfirm}
              >
                {confirmButtonText || t('popconfirm.confirmButtonText')}
              </PxButton>
            </>
          )}
        </div>
      </div>
    )
  }, [
    t,
    style,
    icon,
    iconColor,
    hideIcon,
    title,
    actions,
    cancelButtonType,
    cancelButtonText, confirmButtonType, confirmButtonText, handleCancel, handleConfirm
  ])

  const handleTriggerClick = useCallback(() => {
    if (visible !== void 0) return
    handleSetInnerVisible(!innerVisible)
  }, [visible, innerVisible])

  // 外部控制 visible 时更新内部状态
  useEffect(() => {
    if (visible === void 0) return
    setInnerVisible(!!visible)
  }, [visible])

  return (
    <PxTooltip
      visible={innerVisible}
      trigger="click"
      placement={placement}
      hideTimeout={hideTimeout}
      content={captureContent}
      onVisibleChange={handleVisibleChange}
    >
      <div onClick={handleTriggerClick}>{children}</div>
    </PxTooltip>
  )
}

Popconfirm.displayName = 'PxPopconfirm'

export default memo(Popconfirm)