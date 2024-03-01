import { createTheme } from '@mui/material/styles'
import { error, primary, info, success } from './color'
import { PaletteMode } from '@mui/material'

export default function createPalette(preferredTheme: PaletteMode) {
  return createTheme({
    palette: {
      mode: preferredTheme,
      divider: '#F2F4F7',
      error,
      info,
      primary,
      success,
    },
  })
}
