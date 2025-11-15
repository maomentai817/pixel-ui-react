import React from 'react';
import '@duheng1992/pixel-ui-react/dist/index.css';
import './index.css';

// 这里导出 components, 用于在文档中使用
export * from '../../components';

// 全局布局组件，用于注册组件库
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}

