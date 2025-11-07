---
title: Button 按钮
keywords: [Pixel UI React Button 按钮]
description: Pixel UI React Button 组件文档
---

# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

```tsx
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
import { PxButton } from '@mmt817/pixel-ui-react';

export default () => {
  return (
    <>
      <PxButton disabled>Disabled</PxButton>
      <PxButton type="primary" disabled>Disabled</PxButton>
    </>
  );
};
```

## 图标按钮

使用 `icon` 属性来定义按钮的图标。

```tsx
import { PxButton, PxIcon } from '@mmt817/pixel-ui-react';

export default () => {
  return (
    <>
      <PxButton icon="upload-alt-solid">Upload</PxButton>
      <PxButton type="primary" icon="download-solid">Download</PxButton>
    </>
  );
};
```

## 按钮组

使用 `<PxButtonGroup>` 对多个按钮分组。

```tsx
import { PxButtonGroup, PxButton } from '@mmt817/pixel-ui-react';

export default () => {
  return (
    <PxButtonGroup type="primary">
      <PxButton>Button1</PxButton>
      <PxButton>Button2</PxButton>
      <PxButton>Button3</PxButton>
    </PxButtonGroup>
  );
};
```

## API

### Button Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'base'` | `'base'` |
| size | 按钮尺寸 | `'large' \| 'default' \| 'small'` | `'default'` |
| plain | 是否为朴素按钮 | `boolean` | `false` |
| round | 是否为圆角按钮 | `boolean` | `false` |
| circle | 是否为圆形按钮 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| icon | 图标名称 | `string` | - |

