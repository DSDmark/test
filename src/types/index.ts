import { ReactNode } from 'react'
import { AppProps } from 'next/app'
import { NextPage } from 'next'

// type definitions
type Authors = {
  name: string
  url: string
}

export type TextTransform = 'capitalize' | 'full-size-kana' | 'full-width' | 'lowercase' | 'none' | 'uppercase'

// interfaces definition
export interface IChildrenProps {
  children: ReactNode
}

export type NextPageWithLayout = NextPage & {
  getLayout: () => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  component: NextPageWithLayout
}

export type Token = {
  accessToken: string
  refreshToken: string
}

export interface CurrentUserProps {
  currentUser?: {
    createdAt: string
    updatedAt: string
    emailVerified: string | null
    id: string
    name: string | null
    email: string | null
    image: string | null
    password: string | null
    isAdmin: boolean
  } | null
}

export interface IMetaData {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
  keywords: string[]
  authors: Authors[]
  creator: string
}
