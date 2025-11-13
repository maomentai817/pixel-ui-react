---
group:
  title: 配置组件
  order: 2
title: ConfigProvider 全局配置
toc: content
keywords: [Pixel UI React ConfigProvider 全局配置]
description: Pixel UI React ConfigProvider 组件文档
---

# ConfigProvider 全局配置

Config Provider 被用来提供全局的配置选项, 让你的配置能够在全局都能够被访问到。

## i18n 配置

通过 Config Provider 来配置多语言, 让你的应用可以随时切换语言。

语言包文件存放在 `packages/locale/lang` 目录下, 默认语言为 `en`, 当前支持的语言包有`en`、`zh-CN`、`zh-TW`、`ja`

:::info
Config Provider 还支持拓展翻译文本对象, 通过配置一个类型为 `Record<string, string>` 的属性 `extendsI18nMsg` 实现, 具体格式参考语言包文件解构
:::

```tsx
import React, { useState, useMemo } from 'react';
import { PxConfigProvider, PxButton, PxPopconfirm } from '@mmt817/pixel-ui-react';

export default () => {
  const [language, setLanguage] = useState<'en' | 'zh-CN' | 'zh-TW' | 'ja'>('en');
  
  const languages: Array<'en' | 'zh-CN' | 'zh-TW' | 'ja'> = ['en', 'zh-CN', 'zh-TW', 'ja'];
  
  const changeLang = () => {
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <PxButton onClick={changeLang} type="success">
        {language}
      </PxButton>
      <PxConfigProvider locale={language}>
        <PxPopconfirm title="Are you sure to delete this item?">
          <PxButton>Delete</PxButton>
        </PxPopconfirm>
      </PxConfigProvider>
    </div>
  );
};
```

## 实验性功能

:::warning
在本节中, 您可以学习如何使用 Config Provider 来提供实验性功能。 现在, 我们还没有添加任何实验性功能, 但在未来的规划中, 我们将添加一些实验性功能。 您可以使用此配置来管理这些功能。
:::

## API

### ConfigProvider Props

<API id="PxConfigProvider"></API>
