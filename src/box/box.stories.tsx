import { Story } from '@storybook/react'
import { Box, BoxProps } from '.'

type BoxStory = Story<BoxProps>

export default {
  title: 'Box',
  component: Box,
}

export const WithColors: BoxStory = {
  args: {
    children: 'Box',
    bg: 'blue900',
    color: 'blue50',
  },
}
