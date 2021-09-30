import { createStitches } from '@stitches/react'

type ReKeys<T extends object = {}, P = any> = {
  [K in keyof T]: P
}

export const { styled: Flui, config } = createStitches({
  theme: {
    sizes: {
      sm: '1rem',
    },
    space: {
      px: '1px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    borderWidths: {
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      7: '7px',
      8: '8px',
      9: '9px',
      10: '10px',
      11: '11px',
      12: '12px',
      13: '13px',
      14: '14px',
      15: '15px',
      16: '16px',
    },
    borderStyles: {
      dashed: 'dashed',
      dotted: 'dotted',
      double: 'double',
      groove: 'groove',
      inherit: 'inherit',
      initial: 'initial',
      inset: 'inset',
      none: 'none',
      outset: 'outset',
      ridge: 'ridge',
      solid: 'solid',
    },

    shadows: {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      11: 11,
      12: 12,
      13: 13,
      14: 14,
      15: 15,
      16: 16,
      17: 17,
      18: 18,
      19: 19,
      20: 20,
      21: 21,
      22: 22,
      23: 23,
      24: 24,
    },
    radii: {
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    opacity: {
      '100%': '1',
    },
    overflow: {
      hidden: 'hidden',
    },
    display: {
      flex: 'flex',
    },
    colors: {
      current: 'currentColor',
      blue50: '#eff6ff',
      blue100: '#dbeafe',
      blue200: '#bfdbfe',
      blue300: '#93c5fd',
      blue400: '#60a5fa',
      blue500: '#3b82f6',
      blue600: '#2563eb',
      blue700: '#1b4ed8',
      blue800: '#1e40af',
      blue900: '#1e3a8a',
    },
  },
})

const interpolation = <TK extends object = {}>(
  tokens: TK,
  noPrefix = false,
) => <T = any>(interpolate: (key: string) => T): ReKeys<TK, T> => {
  const keys = Object.keys(tokens)
  const result: any = {}

  for (const k of keys) {
    result[k] = interpolate(noPrefix ? k : '$' + k)
  }
  return result
}

export const interpolateBorderStyles = interpolation(config.theme.borderStyles)
export const interpolateBorderWidths = interpolation(config.theme.borderWidths)
export const interpolateColors = interpolation(config.theme.colors)
export const interpolateDisplay = interpolation(config.theme.display)
export const interpolateOpacity = interpolation(config.theme.opacity)
export const interpolateOverflow = interpolation(config.theme.overflow)
export const interpolateRadius = interpolation(config.theme.radii)
export const interpolateShadows = interpolation(config.theme.shadows, true)
export const interpolateSizes = interpolation(config.theme.sizes)
export const interpolateSpace = interpolation(config.theme.space)
