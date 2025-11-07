import useEventListener from './useEventListener'

export default function useClickOutside(
  elementRef: React.RefObject<HTMLElement | void>,
  callback: (_e: MouseEvent) => void
) {
  useEventListener(document, 'click', (e: Event) => {
    if (elementRef.current && e.target) {
      if (!elementRef.current.contains(e.target as HTMLElement)) {
        callback(e as MouseEvent)
      }
    }
  })
}
