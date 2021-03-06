import React from 'react'
import { Flui } from '@fluido/ui'
import { GridProps_, Grid_ } from './styled'

export interface GridProps extends GridProps_ {}

export const Grid = Flui<'div', GridProps>(({ children, ...props }, ref) => {
  return (
    <Grid_ ref={ref} {...props}>
      {children}
    </Grid_>
  )
})
