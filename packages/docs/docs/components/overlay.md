---
group:
  title: Basic 基础组件
  order: 1
title: Overlay 遮罩层
toc: content
keywords: [Pixel UI React Overlay 遮罩层]
description: Pixel UI React Overlay 组件文档
---

# Overlay 遮罩层

向指定元素添加遮罩层, 常用于模态框、抽屉等组件背景。

## 基础用法

通过 `mask` 属性控制遮罩层**样式上的**显示隐藏, 通过 `zIndex` 属性设置遮罩层层级

设置在 `PxOverlay` 上的 `attrs` 会被拦截, 自定义类名列表可通过 `overlayClass` 添加

:::warning
`mask` 属性仅控制**遮罩层显示**, 仅属于样式上的区分, 对于插槽内容不做处理

页面滚动的锁定与 `PxOverlay` 卸载挂载关联, 建议使用条件渲染控制实例创建销毁
:::

```tsx
import React, { useState } from 'react';
import { PxOverlay, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div style={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ebe6e0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <PxButton onClick={handleOpen}>Button</PxButton>
        <PxButton onClick={handleOpen} type="primary">Primary</PxButton>
        <PxButton onClick={handleOpen} type="success">Success</PxButton>
        <PxButton onClick={handleOpen} type="warning">Warning</PxButton>
        <PxButton onClick={handleOpen} type="danger">Danger</PxButton>
        <PxButton onClick={handleOpen} type="sakura">Sakura</PxButton>
      </div>
      <PxOverlay overlayClass="f-c" open={visible} setOpen={setVisible}>
        <PxButton onClick={handleClose}>Close</PxButton>
      </PxOverlay>
    </div>
  );
};
```

## 自定义颜色

通过 `color` 设置默认遮罩层颜色

:::tip
`grid`, `preset` 等预设装饰性遮罩层优先级高于 `color` 自定义颜色

其颜色通过 `--px-grid-color-1` 等属性修改
:::

```tsx
import React, { useState } from 'react';
import { PxOverlay, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div style={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ebe6e0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <PxButton onClick={handleOpen}>Button</PxButton>
        <PxButton onClick={handleOpen} type="primary">Primary</PxButton>
        <PxButton onClick={handleOpen} type="success">Success</PxButton>
        <PxButton onClick={handleOpen} type="warning">Warning</PxButton>
        <PxButton onClick={handleOpen} type="danger">Danger</PxButton>
        <PxButton onClick={handleOpen} type="sakura">Sakura</PxButton>
      </div>
      {visible && (
        <PxOverlay
          open={visible}
          setOpen={setVisible}
          overlayClass="f-c"
          color="rgba(255, 119, 7, 0.4)"
        >
          <PxButton onClick={handleClose}>Close</PxButton>
        </PxOverlay>
      )}
    </div>
  );
};
```

## 网格背景-默认

通过 `grid` 属性设置网格背景

```tsx
import React, { useState } from 'react';
import { PxOverlay, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div style={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ebe6e0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <PxButton onClick={handleOpen}>Button</PxButton>
        <PxButton onClick={handleOpen} type="primary">Primary</PxButton>
        <PxButton onClick={handleOpen} type="success">Success</PxButton>
        <PxButton onClick={handleOpen} type="warning">Warning</PxButton>
        <PxButton onClick={handleOpen} type="danger">Danger</PxButton>
        <PxButton onClick={handleOpen} type="sakura">Sakura</PxButton>
      </div>
      {visible && (
        <PxOverlay open={visible} setOpen={setVisible} grid overlayClass="f-c">
          <PxButton onClick={handleClose}>Close</PxButton>
        </PxOverlay>
      )}
    </div>
  );
};
```

## 网格背景-预设1

通过 `preset1` 预设网格背景-1, 同时可通过 `matte` 属性设置遮罩层 **哑光** 效果

```tsx
import React, { useState } from 'react';
import { PxOverlay, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div style={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ebe6e0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <PxButton onClick={handleOpen}>Button</PxButton>
        <PxButton onClick={handleOpen} type="primary">Primary</PxButton>
        <PxButton onClick={handleOpen} type="success">Success</PxButton>
        <PxButton onClick={handleOpen} type="warning">Warning</PxButton>
        <PxButton onClick={handleOpen} type="danger">Danger</PxButton>
        <PxButton onClick={handleOpen} type="sakura">Sakura</PxButton>
      </div>
      <PxOverlay open={visible} setOpen={setVisible} overlayClass="f-c">
        <PxButton onClick={handleClose}>Close</PxButton>
      </PxOverlay>
    </div>
  );
};
```

## 遮罩滚动

通过 `lockScroll` 属性控制是否锁定页面滚动, 默认为 `true`。设置为 `false` 时, 遮罩层打开时页面仍可滚动

```tsx
import React, { useState } from 'react';
import { PxOverlay, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  const [visible, setVisible] = useState(false);
  const [lockScroll, setLockScroll] = useState(false);

  const handleOpen = (withScroll) => {
    setLockScroll(withScroll);
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div style={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ebe6e0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <PxButton onClick={() => handleOpen(false)}>打开遮罩（允许滚动）</PxButton>
        <PxButton onClick={() => handleOpen(true)} type="primary">打开遮罩（锁定滚动）</PxButton>
      </div>
      <PxOverlay 
        open={visible} 
        setOpen={setVisible}
        overlayClass="f-c"
        lockScroll={lockScroll}
      >
        <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '4px' }}>
          <PxButton onClick={handleClose} style={{ marginBottom: '20px' }}>Close</PxButton>
          <div style={{ padding: '20px' }}>
            <p>当 lockScroll 为 false 时，即使遮罩层打开，页面仍然可以滚动。</p>
          </div>
        </div>
      </PxOverlay>
    </div>
  );
};
```

## 点击遮罩关闭

通过 `backdropClose` 属性控制是否在点击遮罩层时关闭, 默认为 `false`。设置为 `true` 时, 点击遮罩层背景可以关闭遮罩

```tsx
import React, { useState } from 'react';
import { PxOverlay, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div style={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ebe6e0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <PxButton onClick={handleOpen}>打开遮罩（点击遮罩关闭）</PxButton>
      </div>
      <PxOverlay 
        open={visible} 
        setOpen={setVisible}
        overlayClass="f-c"
        backdropClose
      >
        <div onClick={e => e.stopPropagation()} style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '4px' }}>
          <p style={{ marginBottom: '20px' }}>点击遮罩层背景可以关闭</p>
          <PxButton onClick={handleClose}>或者点击按钮关闭</PxButton>
        </div>
      </PxOverlay>
    </div>
  );
};
```

## API

### Overlay Props

<API id="PxOverlay"></API>
