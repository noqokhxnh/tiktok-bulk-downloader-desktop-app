/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly RENDERER_VITE_TIKTOK_COOKIE: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
