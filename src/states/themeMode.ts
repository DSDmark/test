import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IThemeInitialState } from './type'
import { PaletteMode } from '@mui/material'

const initialState: IThemeInitialState = {
  preferredThemeMode: 'light',
}

export const themeModeSlice = createSlice({
  name: 'themeMode',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<PaletteMode>) => {
      state.preferredThemeMode = action.payload
    },
  },
})
export const { setThemeMode } = themeModeSlice.actions
export default themeModeSlice.reducer
