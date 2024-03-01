import React from 'react'
import { Header, Footer, Banner } from '@/components'
import { IChildrenProps } from '@/types'

export default function RootLayout({ children }: IChildrenProps) {
  return (
    <>
      <Banner />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
