import { createStitches } from '@stitches/react'

type ReKeys<T extends object = {}, P = any> = {
  [K in keyof T]: P
}

export const { styled: Flui, config } = createStitches({
  theme: {
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
    colors: {
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

const interpolation = <TK extends object = {}>(tokens: TK) => <T = any>(
  interpolate: (key: string) => T,
): ReKeys<TK, T> => {
  const keys = Object.keys(tokens)
  const result: any = {}

  for (const k of keys) {
    result[k] = interpolate('$' + k)
  }
  return result
}

export const interpolateSpace = interpolation(config.theme.space)
export const interpolateColors = interpolation(config.theme.colors)
