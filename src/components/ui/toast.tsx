// base
import React, { useEffect } from 'react'

// @mui
import { Snackbar, Alert } from '@mui/material'

// hooks
import { useAppSelector, useAppDispatch } from '@/hooks'

// actions
import { reSetToast } from '@/states'

const ToastCpt = () => {
  const { message, type } = useAppSelector(({ toast }) => toast)
  const dispatch = useAppDispatch()
  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    setOpen(true)
    dispatch(reSetToast())
    return () => setOpen(false)
  }, [message, dispatch])

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={2000}
      onClose={() => setOpen(false)}
    >
      <Alert severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default ToastCpt
