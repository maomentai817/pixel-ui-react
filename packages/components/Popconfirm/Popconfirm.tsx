import { memo, useCallback, useMemo, useState, useRef, useEffect } from 'react'
import { addUnit } from '@pixel-ui-react/utils'

import { PxTooltip } from '../Tooltip'
import { PxButton } from '../Button'
import { PxIcon } from '../Icon'

import styles from './style.module.css'

import type { PopconfirmProps } from './types'

const Popconfirm: React.FC<PopconfirmProps> = (props: PopconfirmProps): React.ReactElement => {
  const {
    title,
    content,
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
  const style = useMemo(() => ({ width: addUnit(props.width) }), [width])
  const virtualTriggerRef = useRef<HTMLDivElement>(null)

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

  const captureContent = useMemo(() => {
    return (
      <div className={styles['px-popconfirm']} style={style} data-testid="px-popconfirm">
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
                {cancelButtonText || 'No'}
              </PxButton>
              <PxButton
                id="px-popconfirm__confirm"
                className={styles['px-popconfirm__confirm']}
                size="small"
                type={confirmButtonType}
                onClick={handleConfirm}
              >
                {confirmButtonText || 'Yes'}
              </PxButton>
            </>
          )}
        </div>
      </div>
    )
  }, [
    content,
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
    if (visible !== void 0 || innerVisible) return
    handleSetInnerVisible(!innerVisible)
  }, [visible, innerVisible])

  // 外部控制 visible 时更新内部状态
  useEffect(() => {
    if (visible === void 0) return
    setInnerVisible(!!visible)
  }, [visible])

  return (
    <>
      <PxTooltip
        visible={innerVisible}
        placement={placement}
        hideTimeout={hideTimeout}
        content={captureContent}
        virtualTriggering
        virtualRef={virtualTriggerRef}
        onVisibleChange={handleVisibleChange}
      ></PxTooltip>
      <div ref={virtualTriggerRef} className="inline-block" onClick={handleTriggerClick}>{children}</div>
    </>
  )
}

Popconfirm.displayName = 'PxPopconfirm'

export default memo(Popconfirm)