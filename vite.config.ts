import { fileURLToPath, URL } from 'url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
// command
export default defineConfig(({ mode }) => {
  // 현재 작업 디렉터리의 `mode`를 기반으로 env 파일을 불러옴
  // 세 번째 매개변수를 ''로 설정하면 `VITE_` 접두사에 관계없이 모든 환경 변수를 불러옴
  // TODO: 근데 현재 동작을 안 함.. 나중에 다시 알아보자
  const env = loadEnv(mode, process.cwd(), '');
  return {
    // Vite 설정
    define: {
      __APP_ENV__: env.APP_ENV,
    }, // Load app-level env vars to node-level env vars.
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});
