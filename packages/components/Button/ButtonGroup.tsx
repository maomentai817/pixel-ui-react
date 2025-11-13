import { memo } from 'react'
import type { JSX } from 'react'

import { ButtonGroupContext } from './context'
import type { ButtonGroupProps } from './types.buttonGroup'
import styles from './style.module.css'

const ButtonGroup = (props: ButtonGroupProps): JSX.Element => {
  const {
    size,
    type = 'base',
    disabled,
    round,
    circle,
    color,
    children
  } = props
  const contextValue = {
    size,
    type,
    disabled,
    round,
    circle,
    color
  }

  const classNames = [
    'px-button-group',
    styles['px-button-group'],
    type ? styles[`px-button-group--${type}`] : ''
  ].filter(Boolean).join(' ');

  return (
    <ButtonGroupContext.Provider value={contextValue}>
      <div className={classNames} role="button-group">
        {children}
      </div>
    </ButtonGroupContext.Provider>
  )
}

ButtonGroup.displayName = 'PxButtonGroup'

export default memo(ButtonGroup)