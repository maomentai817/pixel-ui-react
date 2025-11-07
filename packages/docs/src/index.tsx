import React, { useEffect } from 'react';
import { PxConfigProvider } from '@mmt817/pixel-ui-react';
import '@mmt817/pixel-ui-react/dist/index.css';
import './index.css';

// 全局布局组件，用于注册组件库
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <PxConfigProvider locale="zh-CN">
      {children}
    </PxConfigProvider>
  );
}

