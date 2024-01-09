import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig(() => ({
//   plugins: [react()],
//   test: {
//     environment: "jsdom",
//     setupFiles: "./src/setupTests.ts"
//   }
// }));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.VITE_REACT_APP_CLIENT_ID': JSON.stringify(env.VITE_REACT_APP_CLIENT_ID)
    },
    plugins: [react()],
    test: {
      environment: "jsdom",
      setupFiles: "./src/setupTests.ts"
    }
  }
})