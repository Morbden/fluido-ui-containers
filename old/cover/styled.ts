import { Length, makeNthChildSelector, styled } from '@fluido/ui'
import { Box, BoxProps } from '../box/old.index'

export interface CoverProps_ extends BoxProps {
  centered?: number | number[]
  fill?: number | number[]
  gap?: Length
  minHeight?: Length
}

export const Cover_ = styled(Box, {
  functions: { makeNthChildSelector },
})<CoverProps_>`
  display: flex;
  flex-direction: column;
  min-height: #or(~$minHeight, 100vh);
  gap: #or(~$gap, $theme.spaces.md);

  & > :is(#func(makeNthChildSelector, $centered)) {
    margin-top: auto;
    margin-bottom: auto;
  }

  & > :is(#func(makeNthChildSelector, $fill)) {
    flex: 1;
  }
`
