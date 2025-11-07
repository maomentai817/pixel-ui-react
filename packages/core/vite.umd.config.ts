import { defineConfig, PluginOption } from 'vite'
import { readFileSync } from 'fs'
import { resolve } from 'path'
import { delay } from 'lodash-es'
import viteCompression from 'vite-plugin-compression'

import react from '@vitejs/plugin-react-swc'
import shell from 'shelljs'
import terser from '@rollup/plugin-terser'
import { hooksPlugin as hooks } from '@pixel-ui-react/vite-plugins'

const TRY_MOVE_STYLES_DELAY = 800 as const
const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV === 'test'
const moveStyles = () => {
  try {
    readFileSync('./dist/umd/index.css.gz')
    shell.cp('./dist/umd/index.css', './dist/index.css')
  } catch (_) {
    delay(moveStyles, TRY_MOVE_STYLES_DELAY)
  }
}

export default defineConfig({
  plugins: [
    react(),
    viteCompression(),
    hooks({
      rmFiles: ['./dist/umd', './dist/index.css'],
      afterBuild: moveStyles
    }),
    terser({
      compress: {
        drop_console: ['log'],
        drop_debugger: true,
        passes: 3,
        global_defs: {
          '@DEV': JSON.stringify(isDev),
          '@PROD': JSON.stringify(isProd),
          '@TEST': JSON.stringify(isTest)
        }
      }
    })
  ] as PluginOption[],
  build: {
    outDir: 'dist/umd',
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'PixelUI',
      fileName: 'index',
      formats: ['umd']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        exports: 'named',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css'
          return assetInfo.name as string
        }
      }
    }
  }
})
