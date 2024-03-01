'use client'

// base
import React from 'react'

// providers
import ThemeProvider from '@/theme'
import { persistor } from '@/states'
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
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider>
        {children}
        <ToastCpt />
      </ThemeProvider>
    </PersistGate>
  )
}

export default GlobalLayout
