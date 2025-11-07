import { memo, useMemo } from 'react'
import type { JSX } from 'react'

import type { IconProps } from './types'
import styles from './style.module.css'

const Icon = (props: IconProps): JSX.Element => {
  const {
    icon,
    size = 14,
    type,
    color,
    flip,
    rotation,
    spin,
    bounce,
    shake,
    beat,
    className,
    style,
    onClick,
    onMouseDown,
  } = props

  const customStyle = useMemo(() => ({
    '--px-icon-color': color ?? void 0,
    fontSize: `${size}px`,
    rotate: rotation ? `${rotation}deg` : void 0,
    ...(style || {})
  }), [color, size, rotation, style])

  const classNames = [
    className,
    'hn',
    icon ? `hn-${icon}` : '',
    styles['px-icon'],
    type ? styles[`px-icon--${type}`] : '',
    flip ? styles[`px-icon--${flip}`] : '',
    spin ? styles['is-spin'] : '',
    bounce ? styles['is-bounce'] : '',
    shake ? styles['is-shake'] : '',
    beat ? styles['is-beat'] : ''
  ].filter(Boolean).join(' ')

  return (
    <i
      className={classNames}
      style={customStyle}
      role="img"
      onClick={onClick ? (event) => onClick(event) : void 0}
      onMouseDown={onMouseDown ? (event) => onMouseDown(event) : void 0}
    >
    </i>
  )
}

Icon.displayName = 'PxIcon'

export default memo(Icon)