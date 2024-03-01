// import { z } from 'zod'
// import { createEnv } from '@t3-oss/env-nextjs'

export const prod = process.env.NODE_ENV === 'production'
export const dev = process.env.NODE_ENV === 'development'

// export const env = createEnv({
//   client: {
//     NEXT_PUBLIC_APP_URL: z.string().min(1),
//   },
//   runtimeEnv: {
//     NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
//   },
// })
