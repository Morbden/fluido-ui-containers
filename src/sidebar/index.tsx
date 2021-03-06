import React from 'react'
import { Flui } from '@fluido/ui'
import { SidebarProps_, Sidebar_ } from './styled'

export interface SidebarProps extends SidebarProps_ {
  children: [React.ReactNode, React.ReactNode]
}
export const Sidebar = Flui<'div', SidebarProps>(
  ({ children, ...props }, ref) => {
    return (
      <Sidebar_ ref={ref} {...props}>
        {children}
      </Sidebar_>
    )
  },
)
