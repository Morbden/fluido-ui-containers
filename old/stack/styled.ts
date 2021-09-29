import { Length, makeNthChildSelector, styled } from '@fluido/ui'
import { Box, BoxProps } from '../box/old.index'

export interface StackProps_ extends BoxProps {
  gap?: Length
  splitAfter?: number | number[]
}

export const Stack_ = styled(Box, {
  functions: { makeNthChildSelector },
})<StackProps_>`
  display: flex;
  flex-direction: column;
  gap: #or(~$gap, $theme.spaces.xl);

  & > :is(#func(makeNthChildSelector, $splitAfter, 1)) {
    margin-top: auto;
  }
`
