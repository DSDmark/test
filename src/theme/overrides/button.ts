import { Theme, alpha } from '@mui/material'

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'inherit',
          fontWeight: theme.typography.fontWeightBold,
          '&:hover': {
            cursor: 'pointer',
            boxShadow: 'none',
          },
        },
        html: {
          WebkitOverflowScrolling: 'touch',
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.shadows,
          '&:hover': {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          boxShadow: theme.shadows,
        },
        containedSecondary: {
          boxShadow: theme.shadows,
        },
        outlinedInherit: {
          border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  }
}
