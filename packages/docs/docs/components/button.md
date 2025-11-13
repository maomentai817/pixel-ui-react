---
group:
  title: Basic 基础组件
  order: 1
title: Button 按钮
toc: content
keywords: [Pixel UI React Button 按钮]
description: Pixel UI React Button 组件文档
---

# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

```tsx
import React from 'react';
import { PxButton } from '@mmt817/pixel-ui-react';

export default () => {
  return (
    <>
      <p>
        <PxButton>Button</PxButton>
        <PxButton type="primary">Primary</PxButton>
        <PxButton type="success">Success</PxButton>
        <PxButton type="warning">Warning</PxButton>
        <PxButton type="danger">Danger</PxButton>
        <PxButton type="sakura">Sakura</PxButton>
      </p>
      <p>
        <PxButton plain>Plain</PxButton>
        <PxButton type="primary" plain>Primary</PxButton>
        <PxButton type="success" plain>Success</PxButton>
        <PxButton type="warning" plain>Warning</PxButton>
        <PxButton type="danger" plain>Danger</PxButton>
        <PxButton type="sakura" plain>Sakura</PxButton>
      </p>
      <p>
        <PxButton round>Round</PxButton>
        <PxButton type="primary" round>Primary</PxButton>
        <PxButton type="success" round>Success</PxButton>
        <PxButton type="warning" round>Warning</PxButton>
        <PxButton type="danger" round>Danger</PxButton>
        <PxButton type="sakura" round>Sakura</PxButton>
      </p>
      <p>
        <PxButton icon="search" circle></PxButton>
        <PxButton type="primary" icon="edit-solid" circle></PxButton>
        <PxButton type="success" icon="check-solid" circle></PxButton>
        <PxButton type="warning" icon="star-solid" circle></PxButton>
        <PxButton type="danger" icon="trash-solid" circle></PxButton>
        <PxButton type="sakura" icon="tag-solid" circle></PxButton>
      </p>
    </>
  );
};
```

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

```tsx
import React from 'react';
import { PxButton } from '@mmt817/pixel-ui-react';

export default () => {
  return (
    <>
      <p>
        <PxButton>Button</PxButton>
        <PxButton type="primary">Primary</PxButton>
        <PxButton type="success">Success</PxButton>
        <PxButton type="warning">Warning</PxButton>
        <PxButton type="danger">Danger</PxButton>
        <PxButton type="sakura">Sakura</PxButton>
      </p>
      <p>
        <PxButton disabled>Button</PxButton>
        <PxButton type="primary" disabled>Primary</PxButton>
        <PxButton type="success" disabled>Success</PxButton>
        <PxButton type="warning" disabled>Warning</PxButton>
        <PxButton type="danger" disabled>Danger</PxButton>
        <PxButton type="sakura" disabled>Sakura</PxButton>
      </p>
    </>
  );
};
```

## 图标按钮

使用 `icon` 属性来定义按钮的图标。

```tsx
import React from 'react';
import { PxButton, PxIcon } from '@mmt817/pixel-ui-react';

export default () => {
  return (
    <div>
      <PxButton type="primary" icon="edit" />
      <PxButton type="primary" icon="share" />
      <PxButton type="primary" icon="trash" />
      <PxButton type="primary" icon="search">Search</PxButton>
      <PxButton type="primary">
        Upload
        <PxIcon icon="upload-alt-solid" style={{ marginLeft: '8px' }} color="#fff" />
      </PxButton>
    </div>
  );
};
```

## 按钮组

使用 `<PxButtonGroup>` 对多个按钮分组。

```tsx
import React from 'react';
import { PxButtonGroup, PxButton } from '@mmt817/pixel-ui-react';

export default () => {
  return (
    <>
      <p>
        <PxButtonGroup type="primary" round>
          <PxButton>Button1</PxButton>
          <PxButton>Button2</PxButton>
        </PxButtonGroup>
      </p>
      <p>
        <PxButtonGroup type="success" round>
          <PxButton>Button1</PxButton>
          <PxButton>Button2</PxButton>
          <PxButton>Button3</PxButton>
        </PxButtonGroup>
      </p>
      <p>
        <PxButtonGroup type="warning" round>
          <PxButton>Button1</PxButton>
          <PxButton>Button2</PxButton>
          <PxButton>Button3</PxButton>
          <PxButton>Button4</PxButton>
        </PxButtonGroup>
      </p>
      <p>
        <PxButtonGroup type="danger">
          <PxButton type="primary" icon="edit" round />
          <PxButton type="primary" icon="share" />
          <PxButton type="primary" icon="trash" round />
        </PxButtonGroup>
      </p>
      <p>
        <PxButtonGroup type="sakura">
          <PxButton type="primary" icon="edit" round />
          <PxButton type="primary" icon="share" />
          <PxButton type="primary" icon="trash" round />
        </PxButtonGroup>
      </p>
    </>
  );
};
```

## 加载状态

使用 `loading` 属性来定义按钮的加载状态。

:::warning
您可以使用 `loadingIcon` 属性自定义您的 loading 图标
:::

```tsx
import React from 'react';
import { PxButton } from '@mmt817/pixel-ui-react';

export default () => {
  return (
    <div>
      <PxButton type="primary" loading>Loading</PxButton>
      <PxButton type="primary" loadingIcon="circle-notch" loading>
        Loading
      </PxButton>
    </div>
  );
};
```

## 按钮尺寸

使用 `size` 属性来定义按钮的尺寸。

```tsx
import React from 'react';
import { PxButton } from '@mmt817/pixel-ui-react';

export default () => {
  return (
    <>
      <p>
        <PxButton type="primary" size="large">817</PxButton>
        <PxButton type="success" size="large">817</PxButton>
        <PxButton type="warning" size="large">817</PxButton>
        <PxButton type="danger" size="large">817</PxButton>
        <PxButton type="sakura" size="large">817</PxButton>
      </p>
      <p>
        <PxButton type="primary">817</PxButton>
        <PxButton type="success">817</PxButton>
        <PxButton type="warning">817</PxButton>
        <PxButton type="danger">817</PxButton>
        <PxButton type="sakura">817</PxButton>
      </p>
      <p>
        <PxButton type="primary" size="small">817</PxButton>
        <PxButton type="success" size="small">817</PxButton>
        <PxButton type="warning" size="small">817</PxButton>
        <PxButton type="danger" size="small">817</PxButton>
        <PxButton type="sakura" size="small">817</PxButton>
      </p>
    </>
  );
};
```

## Tag

可以自定义元素标签。例如, 按钮, div, 路由链接, nuxt 链接。

```tsx
import React from 'react';
import { PxButton } from '@mmt817/pixel-ui-react';

export default () => {
  return (
    <div>
      <PxButton>button</PxButton>
      <PxButton tag="div" role="button" tabIndex={0}>div</PxButton>
      <PxButton type="primary" tag="a">a</PxButton>
    </div>
  );
};
```

## 自定义颜色

您可以自定义按钮的颜色。组件库将自动计算按钮各状态的颜色。

:::warning
由于技术力问题, 请勿对此功能抱有太高期望, 如果希望实现自定义主题, 更加推荐直接修改 `@property` 属性, 详情见下述
:::

```tsx
import React from 'react';
import { PxButton, PxButtonGroup, PxText } from '@mmt817/pixel-ui-react';

export default () => {
  return (
    <>
      <PxText size="12">使用color属性自动计算颜色,可能出现计算错误</PxText>
      <div style={{ margin: '20px 0' }}>
        <PxButton color="#626aef">Button</PxButton>
        <PxButton color="#626aef" disabled>Button</PxButton>
        <PxButton color="#626aef" plain>Button</PxButton>
        <PxButtonGroup color="#626aef" circle>
          <PxButton>Button1</PxButton>
          <PxButton>Button2</PxButton>
        </PxButtonGroup>
      </div>
      <div style={{ margin: '20px 0' }}>
        <PxButton color="#dfee56">Button</PxButton>
        <PxButton color="#dfee56" disabled>Button</PxButton>
        <PxButton color="#dfee56" plain>Button</PxButton>
        <PxButtonGroup color="#dfee56" round>
          <PxButton>Button1</PxButton>
          <PxButton>Button2</PxButton>
        </PxButtonGroup>
      </div>
      <div style={{ margin: '20px 0' }}>
        <PxButton color="#fadbe0">Button</PxButton>
        <PxButton color="#fadbe0" disabled>Button</PxButton>
        <PxButton color="#fadbe0" plain>Button</PxButton>
        <PxButtonGroup color="#fadbe0">
          <PxButton>Button1</PxButton>
          <PxButton>Button2</PxButton>
        </PxButtonGroup>
      </div>
      <PxText size="12">直接修改paintWorklet变量</PxText>
      <div className="paint" style={{ margin: '20px 0' }}>
        <PxButton>Button</PxButton>
        <PxButtonGroup>
          <PxButton>Button1</PxButton>
          <PxButton>Button2</PxButton>
        </PxButtonGroup>
      </div>
      <style>{`
        .paint .px-button {
          --px-button-text-color: #554562;
          --px-border-color: #554562;
          --px-bg-color: #fadbe0;
          --px-bg-shadow-color: #eaadbd;
        }
      `}</style>
    </>
  );
};
```

## 节流模式

可以通过 `useThrottle` 属性来定义按钮是否使用节流模式 默认为 true。

```tsx
import React from 'react';
import { PxButton } from '@mmt817/pixel-ui-react';

export default () => {
  const handleBtnClick = () => {
    console.log('btn click');
  };

  return (
    <p>
      <PxButton onClick={handleBtnClick}> with throttle</PxButton>
      <PxButton useThrottle={false} onClick={handleBtnClick}>
        without throttle
      </PxButton>
    </p>
  );
};
```

## 新圆角样式

对 `pixelbox.worklet` 进行修改, 支持一种新的圆角样式, 同时限定圆角种类为 3 种, 通过修改 `--px-border-radius` 值控制, 当前展示值大于 3 的情况, 提供属性 `chubby` 控制

:::warning
由于算法不够完善, 普适性不高, 提供属性 `chubby` 限制样式基础模板, 该圆角样式对 `--px-border`, `--px-border-[position]`, `--px-border-radius-[postion]`, `--px-bg-shadow-border`, 元素宽高都有一定要求, 请合理使用
:::

```tsx
import React from 'react';
import { PxButton } from '@mmt817/pixel-ui-react';

export default () => {
  return (
    <>
      <p>
        <PxButton chubby>Chubby</PxButton>
        <PxButton type="primary" chubby>Primary</PxButton>
        <PxButton type="success" chubby>Success</PxButton>
      </p>
      <p>
        <PxButton type="warning" chubby>Warning</PxButton>
        <PxButton type="danger" chubby>Danger</PxButton>
        <PxButton type="sakura" chubby>Sakura</PxButton>
      </p>
      <p>
        <PxButton icon="search" chubby />
        <PxButton type="primary" icon="edit-solid" chubby />
        <PxButton type="success" icon="check-solid" chubby />
        <PxButton type="warning" icon="star-solid" chubby />
        <PxButton type="danger" icon="trash-solid" chubby />
        <PxButton type="sakura" icon="tag-solid" chubby />
      </p>
      <hr />
      <p className="compare">
        <PxButton round>Round</PxButton>
        <PxButton type="primary" round>Primary</PxButton>
        <PxButton type="success" round>Success</PxButton>
      </p>
      <p className="compare">
        <PxButton type="warning" round>Warning</PxButton>
        <PxButton type="danger" round>Danger</PxButton>
        <PxButton type="sakura" round>Sakura</PxButton>
      </p>
      <p className="compare">
        <PxButton icon="search" circle />
        <PxButton type="primary" icon="edit-solid" circle />
        <PxButton type="success" icon="check-solid" circle />
        <PxButton type="warning" icon="star-solid" circle />
        <PxButton type="danger" icon="trash-solid" circle />
        <PxButton type="sakura" icon="tag-solid" circle />
      </p>
      <style>{`
        .compare .px-button {
          --px-button-size: 60px;
        }
      `}</style>
    </>
  );
};
```

## API

### Button Props

<API id="PxButton"></API>
