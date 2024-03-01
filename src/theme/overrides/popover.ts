import { ThemeOptions } from '@mui/material'

export default function Popover(theme: ThemeOptions) {
  return {
    MuiPopover: {
      styleOverrides: {},
      defaultProps: {
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        transformOrigin: { vertical: 'top', horizontal: 'right' },
      },
    },
  }
}
