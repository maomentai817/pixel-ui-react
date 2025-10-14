import { memo, useMemo } from 'react'

import type { IconProps } from './types'
import styles from './style.module.css'

const Icon: React.FC<IconProps> = (props: IconProps): React.ReactElement => {
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
  } = props

  const customStyle = useMemo(() => ({
    '--px-icon-color': color ?? void 0,
    fontSize: `${size}px`,
    rotate: rotation ? `${rotation}deg` : void 0
  }), [color, size, rotation])

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
    >
    </i>
  )
}

Icon.displayName = 'PxIcon'

export default memo(Icon)