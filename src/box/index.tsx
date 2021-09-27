import React from 'react'
import { Flui, tryParseColor, TypedMap } from '@fluido/ui'
import { BoxProps_, Box_ } from './styled'

export interface BoxProps extends BoxProps_ {}

const watchedProps = [
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'mil',
  'mis',
  'mie',
  'mbl',
  'mbs',
  'mbe',
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginInline',
  'marginInlineStart',
  'marginInlineEnd',
  'marginBlock',
  'marginBlockStart',
  'marginBlockEnd',
  'marginInline',
  'marginInlineStart',
  'marginInlineEnd',
  'radius',
]

export const Box = Flui<'div', BoxProps>(
  (
    {
      bg,
      background,
      bgColor,
      backgroundColor,
      children,
      className,
      color,
      fillColor,
      gradient,
      srOnly,
      strokeColor,
      ...props
    },
    ref,
  ) => {
    const classes: string[] = []
    const wProps: TypedMap = props

    className && classes.push(className)
    srOnly && classes.push(' sr-only')

    for (const k in wProps) {
      if (watchedProps.includes(k)) {
        switch (wProps[k]) {
          case 'full':
            wProps[k] = '100%'
            break
          case 'half':
            wProps[k] = '50%'
            break
          case 'third':
            wProps[k] = '33.3333%'
            break
          case 'quarter':
            wProps[k] = '25%'
            break
        }
      }
    }

    wProps.bg = bg && tryParseColor(bg, 'bg')
    wProps.background = background && tryParseColor(background, 'bg')
    wProps.bgColor = bgColor && tryParseColor(bgColor, 'bgColor')
    wProps.backgroundColor =
      backgroundColor && tryParseColor(backgroundColor, 'bgColor')
    wProps.color = color && tryParseColor(color, 'color')
    wProps.fillColor = fillColor && tryParseColor(fillColor, 'fill')
    wProps.strokeColor = strokeColor && tryParseColor(strokeColor, 'stroke')

    if (Array.isArray(gradient) && gradient.length >= 2) {
      wProps.gradient = gradient
        .map((color) => tryParseColor(color || 'transparent', 'gradient'))
        .join(',')
    } else if (typeof gradient === 'string') {
      wProps.gradient = gradient
    }

    return (
      <Box_ className={classes.join(' ')} ref={ref} {...wProps}>
        {children}
      </Box_>
    )
  },
)
