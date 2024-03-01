export const PAGES = [
  { id: 'home', title: 'Home', href: '/' },
  {
    id: 'posts',
    title: 'Posts',
    href: '/posts',
  },
  {
    id: 'gods',
    title: 'Gods',
    href: '/gods',
  },
  {
    id: 'about',
    title: 'About',
    href: '/about',
  },
  {
    id: 'terms',
    title: 'Terms',
    href: '/terms',
  },
  {
    id: 'privacy',
    title: 'Privacy',
    href: '/privacy',
  },
]

export const SETTING_OPTIONS = [
  { id: 'account', title: 'Account' },
  { id: 'dashboard', title: 'Dashboard' },
  { id: 'logout', title: 'Logout' },
]

export const PUBLIC_ROUTES = ['/', 'posts', 'about', 'category']

export const PROTECTED_ROUTES = ['/dashboard', 'create-posts', 'create-category']

export const AUTH_ROUTES = [
  '/login',
  '/create-account',
  '/verify-token',
  '/verify-email',
  '/email-sent',
  '/reset-email-sent',
  '/reset-password',
  '/confirm-email',
]
