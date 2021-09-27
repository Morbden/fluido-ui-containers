import { Flui } from '@fluido/ui'
import { ReelProps_, Reel_ } from './styled'

export interface ReelProps extends ReelProps_ {}

export const Reel = Flui<'div', ReelProps>(({ children, ...props }, ref) => {
  return (
    <Reel_ ref={ref} {...props}>
      {children}
    </Reel_>
  )
})
