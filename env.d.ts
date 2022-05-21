/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_KAKAO_JS_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
