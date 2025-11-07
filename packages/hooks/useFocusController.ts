import { isFunction } from 'lodash-es'
import { useRef, useState, useCallback } from 'react'
import useEventListener from './useEventListener'

interface UseFocusControllerOptions {
  afterFocus?(): void
  beforeBlur?(_event: React.FocusEvent<HTMLElement>): boolean | void
  afterBlur?(): void
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void
}

// 控制元素 (或带有 `.focus()` 方法的对象) 的聚焦状态
// 点击时自动聚焦, 同时提供聚焦/失焦 callback
// wrapper 内在逻辑控制
export function useFocusController<T extends HTMLElement | { focus(): void }>(
  target: React.RefObject<T>,
  { afterBlur, beforeBlur, afterFocus, onFocus, onBlur }: UseFocusControllerOptions = {}
) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = useCallback((event: React.FocusEvent<HTMLElement>) => {
    if (isFocused) return
    setIsFocused(true)
    onFocus?.(event)
    afterFocus?.()
  }, [isFocused, onFocus, afterFocus])

  const handleBlur = useCallback((event: React.FocusEvent<HTMLElement>) => {
    const cancelBlur = isFunction(beforeBlur) ? beforeBlur(event) : false
    if (
      cancelBlur ||
      (event.relatedTarget &&
        wrapperRef.current?.contains(event.relatedTarget as Node))
    )
      return

    setIsFocused(false)
    onBlur?.(event)
    afterBlur?.()
  }, [beforeBlur, onBlur, afterBlur])

  const handleClick = useCallback(() => {
    target.current?.focus()
  }, [target])

  useEventListener(wrapperRef, 'click', handleClick)

  return {
    wrapperRef,
    isFocused,
    handleFocus,
    handleBlur
  }
}

export default useFocusController
