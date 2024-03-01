import { Theme } from '@mui/material'

export default function Icon(theme: Theme) {
  return {
    MuiIcon: {
      styleOverrides: {
        root: {
          fontSize: 'large',
          color: theme.palette.primary.light,
        },
      },
    },
  }
}
