import { useEffect, useRef } from 'react'

export default function useEventListener(
  target: React.RefObject<EventTarget | HTMLElement | null> | EventTarget | HTMLElement | null,
  event: string,
  handler: (_e: Event) => any
) {
  const handlerRef = useRef(handler)

  // 保持最新的 handler 引用
  useEffect(() => {
    handlerRef.current = handler
  }, [handler])

  useEffect(() => {
    const element = target && 'current' in target ? target.current : target

    if (!element) return

    const eventListener = (e: Event) => handlerRef.current(e)

    element.addEventListener(event, eventListener)

    return () => {
      element.removeEventListener(event, eventListener)
    }
  }, [target, event])
}
