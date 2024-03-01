import { ThemeOptions } from '@mui/material'

export default function Container(theme: ThemeOptions) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          marginTop: '4rem',
        },
      },
    },
  }
}
