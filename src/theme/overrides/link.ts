import { ThemeOptions } from '@mui/material'

export default function Link(_: ThemeOptions) {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'inherit',
          textDecoration: 'none',
          underline: 'none',
          '&:hover': {
            cursor: 'pointer',
          },
        },
      },
    },
  }
}
