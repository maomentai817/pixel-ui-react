import { useEffect, useRef, useCallback, useState } from 'react'
import { each, isElement } from 'lodash-es'
import type { TooltipProps } from './types'

export function useEventsToTriggerNode(
  props: TooltipProps & { virtualTriggering?: boolean },
  triggerRef: React.RefObject<HTMLElement | null>,
  events: Record<string, EventListener>,
  closeMethod: () => void
) {
  const eventHandleMapRef = useRef<Map<string, EventListener>>(new Map())
  const prevEventsRef = useRef<Record<string, EventListener>>({})
  const prevTriggerNodeRef = useRef<HTMLElement | null | undefined>(null)

  const [_triggerNode, setTriggerNode] = useState<HTMLElement | null>(null)

  const bindEventToVirtualTriggerNode = useCallback(() => {
    const el = _triggerNode
    if (isElement(el)) {
      each(events, (fn, event) => {
        eventHandleMapRef.current.set(event, fn)
        el?.addEventListener(event as keyof HTMLElementEventMap, fn)
      })
    }
  }, [_triggerNode, events])

  const unbindEventToVirtualTriggerNode = useCallback(() => {
    const el = prevTriggerNodeRef.current
    if (isElement(el)) {
      each(
        ['mouseenter', 'mouseleave', 'click', 'contextmenu'],
        (key) => {
          const handler = eventHandleMapRef.current.get(key)
          if (handler) {
            el?.removeEventListener(key, handler)
            eventHandleMapRef.current.delete(key)
          }
        }
      )
    }
  }, [])

  useEffect(() => {
    if (!props.virtualTriggering) return

    // 使用 requestAnimationFrame 检查 ref 变化
    const checkRef = () => {
      if (triggerRef?.current && triggerRef.current !== _triggerNode) {
        setTriggerNode(triggerRef.current)
      }
    }
    const rafId = requestAnimationFrame(checkRef)
    return () => cancelAnimationFrame(rafId)
  }, [props.virtualTriggering, triggerRef])

  // 监听 _triggerNode 变化
  useEffect(() => {
    if (props.virtualTriggering && _triggerNode !== prevTriggerNodeRef.current) {
      // 先解绑之前的事件
      unbindEventToVirtualTriggerNode()
      // 绑定新的事件
      bindEventToVirtualTriggerNode()
      prevTriggerNodeRef.current = _triggerNode
    }
  }, [props.virtualTriggering, _triggerNode, bindEventToVirtualTriggerNode, unbindEventToVirtualTriggerNode])

  // 监听 events 变化
  useEffect(() => {
    if (!props.virtualTriggering) return

    // 检查 events 是否发生变化
    const eventsChanged = JSON.stringify(events) !== JSON.stringify(prevEventsRef.current)

    if (eventsChanged) {
      unbindEventToVirtualTriggerNode()
      bindEventToVirtualTriggerNode()
      // closeMethod()
      prevEventsRef.current = events
    }
  }, [props.virtualTriggering, events, bindEventToVirtualTriggerNode, unbindEventToVirtualTriggerNode, closeMethod])

  // 清理函数
  useEffect(() => {
    return () => {
      unbindEventToVirtualTriggerNode()
    }
  }, [unbindEventToVirtualTriggerNode])
}

export default useEventsToTriggerNode