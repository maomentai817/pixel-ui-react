import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'dist',
  base: '/pixel-ui-react/',
  publicPath: '/pixel-ui-react/',
  title: 'Pixel UI React - 基于CSS Houdini的像素风React组件库',
  favicons: ['/pixel-ui-react/images/favicon.ico'],
  // 配置 head 标签
  headScripts: [],
  history: {
    type: 'browser',
  },
  links: [
    { rel: 'icon', href: '/pixel-ui-react/images/favicon.ico' },
  ],
  apiParser: {},
  metas: [
    // 基础 SEO meta
    { name: 'description', content: '基于CSS Houdini的像素风React组件库，支持像素风格渲染、自定义像素字体和像素边框，致力于打造独特的Web UI体验。' },
    { name: 'keywords', content: 'Pixel UI,React,组件库,像素风格,CSS Houdini,TypeScript,UI组件,像素风,React组件库,Pixel UI React' },
    { name: 'author', content: 'Pixel UI React Team' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'theme-color', content: '#ffffff' },
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Pixel UI React - 基于CSS Houdini的像素风React组件库' },
    { property: 'og:description', content: '基于CSS Houdini的像素风React组件库，支持像素风格渲染、自定义像素字体和像素边框，致力于打造独特的Web UI体验。' },
    { property: 'og:image', content: '/pixel-ui-react/images/homelogo.png' },
    { property: 'og:url', content: 'https://maomentai817.github.io/pixel-ui-react/' },
    { property: 'og:site_name', content: 'Pixel UI React' },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Pixel UI React - 基于CSS Houdini的像素风React组件库' },
    { name: 'twitter:description', content: '基于CSS Houdini的像素风React组件库，支持像素风格渲染、自定义像素字体和像素边框，致力于打造独特的Web UI体验。' },
    { name: 'twitter:image', content: '/pixel-ui-react/images/homelogo.png' },
  ],
  themeConfig: {
    name: 'Pixel UI React',
    logo: '/pixel-ui-react/images/homelogo.png',
    nav: [
      { title: '开始使用', link: '/getting-started' },
      { title: '组件', link: '/components/button' },
    ],
    socialLinks: {
      github: 'https://github.com/maomentai817/pixel-ui-react',
    },
    prefersColor: {
      default: 'light',
      switch: false, // 禁用主题切换
    },
    footer: 'Copyright © 2025 Pixel UI React',
  },
  resolve: {
    entryFile: './src/index.tsx',
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  // SSR 配置
  ssr: false,
  // 静态导出配置（生成静态HTML，提升SEO）
  exportStatic: {},
  // 配置 demo 目录
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
  // 启用 mfsu 加速
  mfsu: false,
});
