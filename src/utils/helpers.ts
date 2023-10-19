import { THEME_VARIANT_LIST } from "./constants";

export function isCssColor(color?: string | null | false): boolean {
  return !!color && /^(#|var\(--|(rgb|hsl)a?\()/.test(color)
}

export function setPropSize(size: number | string, unit = 'px') {
  if (size == null || size == '') return

  if (typeof size === 'number') {
    if (!isFinite(size)) return
    return size + unit;
  }

  return size;
}

export function convertToRGBA(color: string, a = 1) {
  if (color.startsWith('#')) {
    // Convert hex color to RGBA
    const hex = color.substring(1)
    const bigint = parseInt(hex, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `rgba(${r}, ${g}, ${b}, ${a || 1})`
  } else if (color.startsWith('rgb(')) {
    // Convert RGB color to RGBA
    const rgbValues = color.substring(4, color.length - 1).split(',')
    const r = parseInt(rgbValues[0])
    const g = parseInt(rgbValues[1])
    const b = parseInt(rgbValues[2])
    return `rgba(${r}, ${g}, ${b}, ${a || 1})`
  } else {
    // Default to original color if conversion is not supported
    return color
  }
}

export function includeVariant(value: string | undefined): boolean {
  return value ? THEME_VARIANT_LIST.includes(value) : false;
}

export function accentedToLowercase(string: string) {
  const chuoiKhongDau = string
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

  return chuoiKhongDau
}