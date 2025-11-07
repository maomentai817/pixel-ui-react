import { useMemo } from 'react'
import { TinyColor } from '@ctrl/tinycolor'

// 只定义需要的属性
interface UseColorButtonProps {
  color?: string
  plain?: boolean
  disabled?: boolean
}

function cssVar(name: string) {
  return `--px-${name}`
}

// 新增参数 `overrideColor`，可选
export function usePxButtonCustomStyle(
  props: UseColorButtonProps,
  overrideColor?: string
) {
  return useMemo(() => {
    const styles: Record<string, string> = {}
    const colorRef = overrideColor || props.color

    if (!colorRef) return styles

    let baseColor = colorRef

    const match = baseColor.match(/var\((--[^)]+)\)/)
    if (match) {
      baseColor = getComputedStyle(document.documentElement)
        .getPropertyValue(match[1])
        .trim()
    }

    const color = new TinyColor(baseColor)
    const bgShadow = color.clone().desaturate(12).darken(12).toHexString()

    const textColor = color.isDark()
      ? 'var(--px-color-white)'
      : 'var(--px-color-base)'

    if (props.plain) {
      Object.assign(styles, {
        [cssVar('plain-bg-color')]: color.tint(90).toString(),
        [cssVar('text-color')]: baseColor,
        [cssVar('plain-border-color')]: color.tint(50).toString(),

        [cssVar('hover-bg-color')]: baseColor,
        [cssVar('hover-text-color')]: textColor,

        [cssVar('plain-bg-shadow-color')]: bgShadow
      })

      if (props.disabled) {
        styles[cssVar('disabled-bg-color')] = color.tint(90).toString()
        styles[cssVar('disabled-text-color')] = color.tint(50).toString()
      }
    } else {
      const hoverBg = color.clone().desaturate(3).darken(3).toHexString()

      Object.assign(styles, {
        [cssVar('bg-color')]: baseColor,
        [cssVar('text-color')]: textColor,

        [cssVar('hover-bg-color')]: hoverBg,
        [cssVar('hover-text-color')]: textColor,

        [cssVar('bg-shadow-color')]: bgShadow
      })
    }

    if (props.disabled) {
      Object.assign(styles, {
        [cssVar('disabled-bg-color')]: color.tint(50).toString(),
        [cssVar('disabled-text-color')]: 'var(--px-color-white)'
      })
    }

    return styles
  }, [props.color, props.plain, props.disabled, overrideColor])
}

export default {
  usePxButtonCustomStyle
}
