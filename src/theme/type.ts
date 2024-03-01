import { IChildrenProps } from '@/types'
// import { PaletteMode } from '@mui/material'

export interface IThemeProvider extends IChildrenProps {}

export interface IColor {
  light: string
  main: string
  dark: string
  contrastText: string
}
