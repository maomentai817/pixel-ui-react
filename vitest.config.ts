import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  define: {
    PROD: JSON.stringify(false),
    DEV: JSON.stringify(false),
    TEST: JSON.stringify(true)
  },
  test: {
    environment: 'jsdom',
    setupFiles: [path.resolve(__dirname, 'vitest.setup.ts')],
    globals: true
  },
})
