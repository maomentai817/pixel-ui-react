import { useState, useMemo, useCallback, memo, useRef, useEffect } from 'react'
import { bind, debounce } from 'lodash-es'
import { createPopper, type Instance } from '@popperjs/core'
import { CSSTransition } from 'react-transition-group'

import { useClickOutside } from '@pixel-ui-react/hooks'

import useEventsToTriggerNode from './useEventsToTriggerNode'

import type { TooltipProps } from './types'
import styles from './style.module.css'

const Tooltip: React.FC<TooltipProps> = (props: TooltipProps): React.ReactElement => {
  const {
    content,
    trigger = 'hover',
    placement = 'bottom',
    disabled = false,
    visible,
    popperOptions = {},
    effect = 'light',
    showTimeout = 0,
    hideTimeout = 200,
    virtualTriggering,
    virtualRef,
    onVisibleChange,
    children
  } = props
  const [innerVisible, setInnerVisible] = useState(false)

  // popperjs 封装
  const popperInstance = useRef<null | Instance>(null)

  const openDebounceRef = useRef<ReturnType<typeof debounce>>(null)
  const closeDebounceRef = useRef<ReturnType<typeof debounce>>(null)

  const innerPopperOptions = useMemo(() => ({
    placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 9]
        }
      },
    ],
    ...popperOptions
  }), [placement, popperOptions])

  // hover trigger 延时
  const openDelay = useMemo(() =>
    trigger === 'hover' ? showTimeout : 0,
    [trigger, showTimeout]
  )
  const closeDelay = useMemo(() =>
    trigger === 'hover' ? hideTimeout : 0,
    [trigger, hideTimeout]
  )

  const handleSetVisible = useCallback((val: boolean) => {
    if (disabled) return
    setInnerVisible(val)
    onVisibleChange?.(val)
  }, [setInnerVisible, disabled, onVisibleChange])

  const openFinal = useCallback(() => {
    closeDebounceRef.current?.cancel()
    openDebounceRef.current?.()
  }, [])

  const closeFinal = useCallback(() => {
    openDebounceRef.current?.cancel()
    closeDebounceRef.current?.()
  }, [])

  const togglePopper = useCallback(() => {
    innerVisible ? closeFinal() : openFinal()
  }, [innerVisible, openFinal, closeFinal])

  const triggerEvents = useMemo(() => {
    if (disabled || visible !== void 0) return {}

    switch (trigger) {
      case 'hover':
        return {
          onMouseEnter: openFinal,
          onMouseLeave: closeFinal
        }
      case 'click':
        return {
          onClick: togglePopper
        }
      case 'contextmenu':
        return {
          onContextMenu: (e: React.MouseEvent) => {
            e.preventDefault()
            openFinal()
          }
        }
      default:
        return {}
    }
  }, [trigger, disabled, openFinal, closeFinal, togglePopper])

  const virtualTriggerEvents = useMemo((): Record<string, EventListener> => {
    if (disabled || visible !== void 0) return {}

    switch (trigger) {
      case 'hover':
        return {
          'mouseenter': () => openFinal(),
          'mouseleave': () => closeFinal()
        }
      case 'click':
        return {
          'click': () => togglePopper()
        }
      case 'contextmenu':
        return {
          'contextmenu': (e: Event) => {
            e.preventDefault()
            openFinal()
          }
        }
      default:
        return {}
    }
  }, [trigger, disabled, openFinal, closeFinal, togglePopper])

  const popperEvents = useMemo(() => {
    if (disabled || visible !== void 0 || trigger !== 'hover') return {}

    return {
      onMouseEnter: openFinal,
      onMouseLeave: closeFinal
    }
  }, [trigger, disabled, openFinal, closeFinal])

  // ref 实例
  const containerNode = useRef<HTMLDivElement>(null)
  const popperNode = useRef<HTMLDivElement>(null)
  const triggerNode = useRef<HTMLDivElement>(null)

  useClickOutside(containerNode as React.RefObject<HTMLElement | void>, () => {
    if (trigger === 'hover' || visible !== void 0) return
    innerVisible && closeFinal()
  })

  // 虚拟节点绑定
  useEventsToTriggerNode(props, virtualRef as React.RefObject<HTMLElement | null>, virtualTriggerEvents, closeFinal)

  const popperClassName = [
    styles['px-tooltip__popper'],
    styles[`is-${effect}`],
  ].join(' ')

  useEffect(() => {
    if (openDebounceRef.current) {
      openDebounceRef.current.cancel()
    }
    if (closeDebounceRef.current) {
      closeDebounceRef.current.cancel()
    }
    openDebounceRef.current = debounce(bind(handleSetVisible, null, true), openDelay)
    closeDebounceRef.current = debounce(bind(handleSetVisible, null, false), closeDelay)

    return () => {
      openDebounceRef.current?.cancel()
      closeDebounceRef.current?.cancel()
    }
  }, [openDelay, closeDelay, handleSetVisible])


  const destroyPopperInstance = useCallback(() => {
    popperInstance.current?.destroy()
    popperInstance.current = null
  }, [popperInstance])

  useEffect(() => {
    if (innerVisible) {
      const _triggerNode = (virtualTriggering ? virtualRef?.current : triggerNode.current) as HTMLElement | null
      // 显示时创建或更新 popper
      if (_triggerNode && popperNode.current) {
        if (popperInstance.current) {
          // 如果已存在，更新配置
          popperInstance.current.setOptions(innerPopperOptions)
        } else {
          // 不存在则创建
          popperInstance.current = createPopper(
            _triggerNode,
            popperNode.current,
            innerPopperOptions
          )
        }
      }
    }
  }, [innerVisible, virtualTriggering, innerPopperOptions])

  // 外部控制 visible 时更新内部状态
  useEffect(() => {
    if (visible === void 0) return
    setInnerVisible(!!visible)
  }, [visible])

  useEffect(() => {
    return () => {
      destroyPopperInstance()
      openDebounceRef.current?.cancel()
      closeDebounceRef.current?.cancel()
    }
  }, [])

  return (
    <div
      className={styles['px-tooltip']}
      ref={containerNode}
    >
      {!virtualTriggering && (
        <div
          className={styles['px-tooltip__trigger']}
          ref={triggerNode}
          {...triggerEvents}
        >
          {children}
        </div>
      )}

      <CSSTransition
        nodeRef={popperNode}
        in={innerVisible}
        timeout={200}
        unmountOnExit
        onExited={destroyPopperInstance}
        classNames="fade"
      >
        <div
          className={popperClassName}
          ref={popperNode}
          {...popperEvents}
        >
          {content}
          <div className={styles['arrow']} data-popper-arrow></div>
        </div>
      </CSSTransition>
    </div>
  )
}

Tooltip.displayName = 'PxTooltip'

export default memo(Tooltip)