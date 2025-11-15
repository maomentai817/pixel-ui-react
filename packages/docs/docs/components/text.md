---
group:
  title: Basic 基础组件
  order: 1
title: Text 文本
toc: content
keywords: [Pixel UI React Text 文本]
description: Pixel UI React Text 组件文档
---

# Text 文本

文本的常见操作

## 基础用法

用 `type` 属性设置 Text 类型, `bold` 属性设置**粗体**

```tsx
import React from 'react';
import { PxText } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <>
      <p>
        <PxText style={{ marginRight: '10px' }}>Default</PxText>
        <PxText style={{ marginRight: '10px' }} type="primary">Primary</PxText>
        <PxText style={{ marginRight: '10px' }} type="success">Success</PxText>
        <PxText style={{ marginRight: '10px' }} type="warning">Warning</PxText>
        <PxText style={{ marginRight: '10px' }} type="danger">Danger</PxText>
        <PxText style={{ marginRight: '10px' }} type="sakura">Sakura</PxText>
      </p>
      <p>
        <PxText style={{ marginRight: '10px' }} bold>这</PxText>
        <PxText style={{ marginRight: '10px' }} bold type="primary">个</PxText>
        <PxText style={{ marginRight: '10px' }} bold type="success">是</PxText>
        <PxText style={{ marginRight: '10px' }} bold type="warning">粗</PxText>
        <PxText style={{ marginRight: '10px' }} bold type="danger">体</PxText>
        <PxText style={{ marginRight: '10px' }} bold type="sakura">喵</PxText>
      </p>
    </>
  );
};
```

## 尺寸

使用 `size` 属性设置 Text 尺寸, 默认大小为 `14px`, 传入值默认为 `px`

```tsx
import React from 'react';
import { PxText } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <>
      <p>
        <PxText style={{ marginRight: '10px' }} size={12}>Default</PxText>
        <PxText style={{ marginRight: '10px' }} size={16} type="primary">Primary</PxText>
        <PxText style={{ marginRight: '10px' }} size={20} type="success">Success</PxText>
      </p>
      <p>
        <PxText style={{ marginRight: '10px' }} size={24} type="warning">Warning</PxText>
        <PxText style={{ marginRight: '10px' }} size={28} type="danger">Danger</PxText>
        <PxText style={{ marginRight: '10px' }} size={28} type="sakura">Sakura</PxText>
      </p>
    </>
  );
};
```

## 颜色

使用 `color` 属性设置 Text 颜色

```tsx
import React from 'react';
import { PxText } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <div>
      <PxText style={{ marginRight: '10px' }} color="green">Text</PxText>
      <PxText style={{ marginRight: '10px' }} color="#ff4785">Text</PxText>
      <PxText style={{ marginRight: '10px' }} color="rgb(0,212,255)">Text</PxText>
      <PxText style={{ marginRight: '10px' }} color="hsl(265, 100%, 50%)">Text</PxText>
      <PxText style={{ marginRight: '10px' }} color="hwb(38 0% 0%)">Text</PxText>
    </div>
  );
};
```

## 对齐方式 & 紧凑

使用 `align` 属性设置 Text 对齐方式, 可选值为 `left`, `center`, `right`, 使用 `compact` 属性设置 Text 是否紧凑

```tsx
import React from 'react';
import { PxText } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <>
      <p>
        <PxText align="left" style={{ display: 'block', width: '100%' }}>align-left</PxText>
      </p>
      <p>
        <PxText align="center" style={{ display: 'block', width: '100%' }}>align-center</PxText>
      </p>
      <p>
        <PxText align="right" style={{ display: 'block', width: '100%' }}>align-right</PxText>
      </p>
      <p>
        <PxText>文本文本</PxText>
        <br />
        <PxText compact>文本文本</PxText>
        <br />
        <PxText>文本文本</PxText>
      </p>
    </>
  );
};
```

## Tag

可以自定义元素标签。例如, 按钮, div, 路由链接, nuxt 链接。

```tsx
import React from 'react';
import { PxText } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <div>
      <PxText>span</PxText>
      <PxText tag="div">div</PxText>
      <PxText tag="a">a</PxText>
    </div>
  );
};
```

## API

### Text Props

<API id="PxText"></API>
