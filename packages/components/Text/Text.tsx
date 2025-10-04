import { memo, useMemo } from 'react';
import type { JSX } from 'react'

import type { TextProps } from './types'
import styles from './style.module.css'

const Text: React.FC<TextProps> = (props: TextProps): React.ReactElement => {
  const {
    size = 14,
    bold = false,
    color,
    align,
    tag = 'span',
    compact = false,
    type = 'base',
    children,
  } = props;

  const Tag = tag as keyof JSX.IntrinsicElements

  const customStyle = useMemo(() => ({
    color: color ?? void 0,
    fontSize: `${size}px`,
    fontWeight: bold ? 'bold' : void 0,
    textAlign: align ?? void 0
  }), [color, size, bold, align])

  const classNames = [
    styles['px-text'],
    type ? styles[`px-text--${type}`] : '',
    compact ? styles['is-compact'] : '',
  ].filter(Boolean).join(' ');

  return (
    <Tag
      className={classNames}
      style={customStyle}
    >
      {children}
    </Tag>
  )
}

Text.displayName = 'PxText'

export default memo(Text)