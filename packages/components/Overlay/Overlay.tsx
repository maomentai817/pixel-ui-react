import { memo, useCallback, useEffect } from 'react'

import type { OverlayProps } from './types'
import styles from './style.module.css'

const Overlay: React.FC<OverlayProps> = (props: OverlayProps): React.ReactElement | null => {
  const {
    open = false,
    setOpen,
    backdropClose,
    mask = true,
    zIndex = 2000,
    overlayClass,
    lockScroll = true,
    color,
    grid,
    matte,
    preset1,
    className,
    children,
  } = props

  const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    e.preventDefault()
    if (backdropClose) {
      setOpen?.(false)
    }
  }, [backdropClose, setOpen])

  const classNames = [
    className,
    styles['px-overlay'],
    ...(Array.isArray(overlayClass) ? overlayClass : [overlayClass]),
    grid ? styles['is-grid-basic'] : void 0,
    !mask ? styles['is-transparent'] : void 0,
    matte ? styles['is-matte'] : void 0,
    preset1 ? styles['is-grid-preset-1'] : void 0,
  ].filter(Boolean).join(' ')

  const handleLockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  const handleUnlockScroll = useCallback(() => {
    document.body.style.overflow = ''
  }, [])

  const updateScroll = useCallback((shouldLock: boolean) => {
    shouldLock ? handleLockScroll() : handleUnlockScroll()
  }, [handleLockScroll, handleUnlockScroll])

  useEffect(() => {
    // 打开了遮罩 & 需要锁定滚动
    if (open && lockScroll) updateScroll(lockScroll)
    // 关闭了遮罩 & 需要解锁滚动
    if (!open && lockScroll) updateScroll(false)
  }, [open, lockScroll])

  if (!open) return null

  return (
    <div
      className={classNames}
      style={{ zIndex: zIndex, backgroundColor: color }}
      onClick={handleBackdropClick}
    >
      {children}
    </div>
  )
}

Overlay.displayName = 'PxOverlay'

export default memo(Overlay)