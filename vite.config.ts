import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

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