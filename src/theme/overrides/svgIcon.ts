import { Theme } from '@mui/material'

export default function SvgIcon(theme: Theme) {
  return {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: 'large',
          color: theme.palette.primary.light,
        },
      },
    },
  }
}
