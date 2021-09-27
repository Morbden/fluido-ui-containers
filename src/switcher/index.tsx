import React from 'react'
import { Flui } from '@fluido/ui'
import { SwitcherProps_, Switcher_ } from './styled'

export interface SwitcherProps extends SwitcherProps_ {}

export const Switcher = Flui<'div', SwitcherProps>(
  ({ children, ...props }, ref) => {
    return (
      <Switcher_ ref={ref} {...props}>
        {children}
      </Switcher_>
    )
  },
)
