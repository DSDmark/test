// base
import React, { ReactNode } from 'react'
import { GlobalLayout } from '../layouts'

// types
import { Metadata } from 'next'

// constants
import { META_DATA } from '@/constants'
import StoreProvider from './StoreProvider'

export const metadata: Metadata = {
  applicationName: META_DATA.name,
  title: {
    default: META_DATA.name,
    template: `%s | ${META_DATA.name}`,
  },
  keywords: META_DATA.keywords,
  authors: [
    {
      name: META_DATA.name,
      url: META_DATA.url,
    },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${META_DATA.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <GlobalLayout>{children}</GlobalLayout>
        </body>
      </html>
    </StoreProvider>
  )
}
