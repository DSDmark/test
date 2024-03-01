import { PaletteMode } from '@mui/material'

export interface IToastInitialState {
  message: string
  type: 'error' | 'success' | 'warning' | 'info'
}

export interface IThemeInitialState {
  preferredThemeMode: PaletteMode
}
