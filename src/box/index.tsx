import React from 'react'
import * as S from './styled'

export type BoxProps = React.ComponentProps<typeof S.Box>

export const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  const _p = props as any
  return <S.Box {..._p}>{children}</S.Box>
}
