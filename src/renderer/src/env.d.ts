/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly RENDERER_VITE_TIKTOK_COOKIE: string
  readonly RENDERER_VITE_TIKTOK_USER_AGENT: string
  readonly RENDERER_VITE_TIKTOK_PROXY: string
  readonly RENDERER_VITE_API_URL: string
  readonly RENDERER_VITE_API_KEY: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
