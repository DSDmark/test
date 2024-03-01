import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { AUTH_ROUTES, PROTECTED_ROUTES } from '@/constants'

export function middleware(request: NextRequest) {
  const currentUserToken = request.cookies.get('x-access')

  if (currentUserToken && AUTH_ROUTES.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (!currentUserToken && PROTECTED_ROUTES.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}
