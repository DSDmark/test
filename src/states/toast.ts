import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TOAST_MESSAGE } from '@/constants'
import { IToastInitialState } from './type'

const initialState: IToastInitialState = {
  message: '',
  type: TOAST_MESSAGE.success,
}

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setSuccessToast: (state, action: PayloadAction<string>) => {
      state.message = action.payload
      state.type = TOAST_MESSAGE.success
    },
    setErrorToast: (state, action: PayloadAction<string>) => {
      state.message = action.payload
      state.type = TOAST_MESSAGE.error
    },
    setWarningToast: (state, action: PayloadAction<string>) => {
      state.message = action.payload
      state.type = TOAST_MESSAGE.warning
    },
    setInfo: (state, action: PayloadAction<string>) => {
      state.message = action.payload
      state.type = TOAST_MESSAGE.info
    },
    reSetToast: state => {
      state.message = ''
    },
  },
})

export const { setInfo, setSuccessToast, setErrorToast, setWarningToast, reSetToast } = toastSlice.actions
export default toastSlice.reducer
