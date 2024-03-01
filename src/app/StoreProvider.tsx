'use client'

import React from 'react'
import { Provider } from 'react-redux'
import store from '@/states'
import { IChildrenProps } from '@/types'

export default function StoreProvider({ children }: IChildrenProps) {
  return <Provider store={store}>{children}</Provider>
}
