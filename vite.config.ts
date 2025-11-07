import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/core/index.ts'),
      name: 'PixelUIReact',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@pixel-ui/react-theme': resolve(__dirname, 'packages/theme'),
      '@pixel-ui/react-utils': resolve(__dirname, 'packages/utils'),
      '@pixel-ui/react-locale': resolve(__dirname, 'packages/locale'),
      '@pixel-ui/react-worklets': resolve(__dirname, 'packages/worklets'),
      '@pixel-ui/react-hooks': resolve(__dirname, 'packages/hooks'),
      '@pixel-ui/react-components': resolve(__dirname, 'packages/components'),
      '@pixel-ui/react-core': resolve(__dirname, 'packages/core')
    }
  }
})
