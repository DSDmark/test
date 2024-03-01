import { useEffect } from 'react'
import { useRouter } from 'next/router'

const useSrcollTop = () => {
  const { pathname } = useRouter()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [pathname])

  return null
}

export default useSrcollTop
