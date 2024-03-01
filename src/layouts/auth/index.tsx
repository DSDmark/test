'use client'

// base
import React from 'react'

// hooks
import { useMount } from '@/hooks'

// types
import { IChildrenProps } from '@/types'

// components
import { Header, Footer } from '@/components'

const GlobalLayout = ({ children }: IChildrenProps) => {
  if (!useMount()) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default GlobalLayout
