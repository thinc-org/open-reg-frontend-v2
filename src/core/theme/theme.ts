import { theme as defaultTheme } from '@chakra-ui/core'
import palette from './palette'

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    palette
  }
}

export default theme
