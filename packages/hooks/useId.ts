import { useMemo } from 'react'

const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 10000),
  current: 0
}

export const useId = (namespace = 'px'): string => {
  const id = useMemo(
    () => `${namespace}-${defaultIdInjection.prefix}-${defaultIdInjection.current++}`,
    [namespace]
  )
  return id
}

export default useId
