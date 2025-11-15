---
group:
  title: Feedback 反馈组件
  order: 4
title: Tooltip 文字提示
toc: content
keywords: [Pixel UI React Tooltip 文字提示]
description: Pixel UI React Tooltip 组件文档
---

# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

在这里提供了 9 种不同方向的展示方式, 可以通过以下完整示例来理解, 选择需要的效果。

使用 `content` 属性来决定 `hover` 时的提示信息。 由 `placement` 属性来决定展示的方向: `[方向]-[对齐位置]`; 四个方向: `top`, `bottom`, `left`, `right`; 三种对齐位置: `start`, `end`, 默认为空。 如 `placement="left-end"`, 则提示信息出现在目标元素左侧, 且提示信息的底部与目标元素底部对齐。

```tsx
import React from 'react';
import { PxTooltip, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <div className="tooltip-base-box">
      <div className="row center">
        <PxTooltip
          className="box-item"
          content="Top Left"
          placement="top-start"
        >
          <PxButton>top-start</PxButton>
        </PxTooltip>
        <PxTooltip
          className="box-item"
          content="Top Center"
          placement="top"
        >
          <PxButton>top</PxButton>
        </PxTooltip>
        <PxTooltip
          className="box-item"
          content="Top Right"
          placement="top-end"
        >
          <PxButton>top-end</PxButton>
        </PxTooltip>
      </div>
      <div className="row">
        <PxTooltip
          className="box-item"
          content="Left Top"
          placement="left-start"
        >
          <PxButton>left-start</PxButton>
        </PxTooltip>
        <PxTooltip
          className="box-item"
          content="Right Top"
          placement="right-start"
        >
          <PxButton>right-start</PxButton>
        </PxTooltip>
      </div>
      <div className="row">
        <PxTooltip
          className="box-item"
          content="Left Center"
          placement="left"
        >
          <PxButton style={{ marginTop: '12px', marginBottom: '12px' }}>left</PxButton>
        </PxTooltip>
        <PxTooltip
          className="box-item"
          content="Right Center"
          placement="right"
        >
          <PxButton>right</PxButton>
        </PxTooltip>
      </div>
      <div className="row">
        <PxTooltip
          className="box-item"
          content="Left Bottom"
          placement="left-end"
        >
          <PxButton>left-end</PxButton>
        </PxTooltip>
        <PxTooltip
          className="box-item"
          content="Right Bottom"
          placement="right-end"
        >
          <PxButton>right-end</PxButton>
        </PxTooltip>
      </div>
      <div className="row center">
        <PxTooltip
          className="box-item"
          content="Bottom Left"
          placement="bottom-start"
        >
          <PxButton>bottom-start</PxButton>
        </PxTooltip>
        <PxTooltip
          className="box-item"
          content="Bottom Center"
          placement="bottom"
        >
          <PxButton>bottom</PxButton>
        </PxTooltip>
        <PxTooltip
          className="box-item"
          content="Bottom Right"
          placement="bottom-end"
        >
          <PxButton>bottom-end</PxButton>
        </PxTooltip>
      </div>
      <style>{`
        .tooltip-base-box {
          padding: 0 120px;
        }
        .tooltip-base-box .row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .tooltip-base-box .center {
          justify-content: center;
        }
        .tooltip-base-box .box-item {
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};
```

## 触发方式

Tooltip 默认是 `hover` 触发, 也可以通过 `trigger` 属性来设置触发方式: `hover`, `click`, `contextmenu`。

```tsx
import React from 'react';
import { PxTooltip, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <div>
      <PxTooltip content="hover trigger">
        <PxButton>hover</PxButton>
      </PxTooltip>
      <PxTooltip trigger="click" content="click trigger">
        <PxButton>click</PxButton>
      </PxTooltip>
      <PxTooltip trigger="contextmenu" content="contextmenu trigger">
        <PxButton>contextmenu</PxButton>
      </PxTooltip>
    </div>
  );
};
```

## 主题

Tooltip 组件内置了两个主题: `light` 和 `dark`。

:::tip
要使用自定义主题, 您必须知道您的工具提示在哪里渲染, 如果您的工具提示被呈现为根元素, 您将需要全局设置css规则。

设置自定义主题时, 需要同时修改弹出箭头和内容样式, 具体设置见下方 demo-preview

由于组件库祖宗之法基于 `css houdini paintWorklet`, 像素盒子大部分基于 `pixelbox` 渲染, 当前仅提供纯色主题, 如果希望渲染线性渐变, 等待后续升级
:::

通过设置 `effect` 来修改主题, 默认为 `light`。

```tsx
import React from 'react';
import { PxTooltip, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <div>
      <PxTooltip content="light theme">
        <PxButton>Light</PxButton>
      </PxTooltip>
      <PxTooltip content="dark theme" effect="dark">
        <PxButton>Dark</PxButton>
      </PxTooltip>
    </div>
  );
};
```

## 更多内容的文字提示

展示多行文本或者是设置文本内容的格式

使用 `content` 属性传入 React 节点来展示复杂内容。

```tsx
import React from 'react';
import { PxTooltip, PxButton, PxText } from '@duheng1992/pixel-ui-react';

export default () => {
  return (
    <PxTooltip
      placement="top"
      content={
        <>
          <PxText tag="div" color="#9fe597">multiple lines</PxText>
          <PxText tag="div" color="#cce581">second line</PxText>
        </>
      }
    >
      <PxButton>Top center</PxButton>
    </PxTooltip>
  );
};
```

## 高级扩展

除了这些基本设置外, 还有一些属性可以让使用者更好的定制自己的效果:

如果需要关闭 `tooltip` 功能, 可以使用 `disabled` 属性

Tooltip 是一个基于 [popperjs](https://popper.js.org/docs/v2/) 二次封装的扩展, 可以通过 `popperOptions` 属性来定制 popperjs 的配置。

```tsx
import React, { useState } from 'react';
import { PxTooltip, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <PxTooltip
      disabled={disabled}
      content="click to close tooltip function"
      placement="bottom"
    >
      <PxButton onClick={() => setDisabled(!disabled)}>
        click to {disabled ? 'active' : 'close'} tooltip function
      </PxButton>
    </PxTooltip>
  );
};
```

## 虚拟触发

有时候我们想把 tooltip 的触发元素放在别的地方, 而不需要写在一起, 这时候就可以使用虚拟触发。

```tsx
import React, { useRef } from 'react';
import { PxTooltip, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  const virtualTrigger = useRef<HTMLButtonElement>(null);

  return (
    <>
      <PxTooltip
        content="Bottom center"
        placement="bottom"
        trigger="hover"
        virtualTriggering
        virtualRef={virtualTrigger}
      />
      <div ref={virtualTrigger} style={{ display: 'inline-block' }}>
        <PxButton>virtual trigger</PxButton>
      </div>
    </>
  );
};
```

## 手动模式

通过 `visible` 属性, 可以设置 `tooltip` 的触发模式为手动模式, 通过控制 `visible` 属性来控制显示和隐藏。

```tsx
import React, { useState } from 'react';
import { PxTooltip, PxButton } from '@duheng1992/pixel-ui-react';

export default () => {
  const [visible, setVisible] = useState(false);

  const open = () => {
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
  };

  return (
    <div>
      <PxTooltip visible={visible} content="手动控制的提示" placement="top">
        <PxButton>手动控制提示</PxButton>
      </PxTooltip>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <PxButton onClick={open}>显示</PxButton>
        <PxButton onClick={close}>隐藏</PxButton>
      </div>
    </div>
  );
};
```


## API

### Tooltip Props

<API id="PxTooltip"></API>
