import { useEffect, useState } from 'react'

const useMount = () => {
  const [mounted, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [])

  return mounted
}

export default useMount
