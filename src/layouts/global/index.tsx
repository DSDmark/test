'use client'

// base
import React from 'react'

// providers
import ThemeProvider from '@/theme'
import { Provider } from 'react-redux'
import store, { persistor } from '@/states'
import { PersistGate } from 'redux-persist/integration/react'

// hooks
import { useMount } from '@/hooks'

// types
import { IChildrenProps } from '@/types'
import { ToastCpt } from '@/components'

export const dynamic = 'force-dynamic'

const GlobalLayout = ({ children }: IChildrenProps) => {
  if (!useMount()) {
    return <>{children}</>
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          {children}
          <ToastCpt />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default GlobalLayout
