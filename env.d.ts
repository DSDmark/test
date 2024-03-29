declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly NEXT_PUBLIC_BACKEND_URL: string
    readonly NEXT_PUBLIC_BASE_URL: string
  }
}
