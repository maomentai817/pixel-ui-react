---
group:
  title: Feedback 反馈组件
  order: 4
title: Popconfirm 气泡确认框
toc: content
keywords: [Pixel UI React Popconfirm 气泡确认框]
description: Pixel UI React Popconfirm 组件文档
---

# Popconfirm 气泡确认框

点击某个元素弹出一个简单的气泡确认框

## 展示位置

Popconfirm 提供了 9 种展示位置

使用 `title` 属性来设置点击参考元素时显示的信息, 由 `placement` 属性来决定展示的方向: `[方向]-[对齐位置]`; 四个方向: `top`, `bottom`, `left`, `right`; 三种对齐位置: `start`, `end`, `null`, 默认为 null。 如 `placement="left-end"`, 则气泡确认框出现在目标元素左侧, 且气泡确认框的底部与目标元素底部对齐。

```tsx
import React from 'react';
import { PxPopconfirm, PxButton } from '@mmt817/pixel-ui-react';

export default () => {
  return (
    <div className="popconfirm-base-box">
      <div className="row center">
        <PxPopconfirm
          className="box-item"
          title="Top Left"
          placement="top-start"
        >
          <PxButton>top-start</PxButton>
        </PxPopconfirm>
        <PxPopconfirm
          className="box-item"
          title="Top Center"
          placement="top"
        >
          <PxButton>top</PxButton>
        </PxPopconfirm>
        <PxPopconfirm
          className="box-item"
          title="Top Right"
          placement="top-end"
        >
          <PxButton>top-end</PxButton>
        </PxPopconfirm>
      </div>
      <div className="row">
        <PxPopconfirm
          className="box-item"
          title="Left Top"
          placement="left-start"
        >
          <PxButton>left-start</PxButton>
        </PxPopconfirm>
        <PxPopconfirm
          className="box-item"
          title="Right Top"
          placement="right-start"
        >
          <PxButton>right-start</PxButton>
        </PxPopconfirm>
      </div>
      <div className="row">
        <PxPopconfirm
          className="box-item"
          title="Left Center"
          placement="left"
        >
          <PxButton style={{ marginTop: '12px', marginBottom: '12px' }}>left</PxButton>
        </PxPopconfirm>
        <PxPopconfirm
          className="box-item"
          title="Right Center"
          placement="right"
        >
          <PxButton>right</PxButton>
        </PxPopconfirm>
      </div>
      <div className="row">
        <PxPopconfirm
          className="box-item"
          title="Left Bottom"
          placement="left-end"
        >
          <PxButton>left-end</PxButton>
        </PxPopconfirm>
        <PxPopconfirm
          className="box-item"
          title="Right Bottom"
          placement="right-end"
        >
          <PxButton>right-end</PxButton>
        </PxPopconfirm>
      </div>
      <div className="row center">
        <PxPopconfirm
          className="box-item"
          title="Bottom Left"
          placement="bottom-start"
        >
          <PxButton>bottom-start</PxButton>
        </PxPopconfirm>
        <PxPopconfirm
          className="box-item"
          title="Bottom Center"
          placement="bottom"
        >
          <PxButton>bottom</PxButton>
        </PxPopconfirm>
        <PxPopconfirm
          className="box-item"
          title="Bottom Right"
          placement="bottom-end"
        >
          <PxButton>bottom-end</PxButton>
        </PxPopconfirm>
      </div>
      <style>{`
        .popconfirm-base-box {
          padding: 0 100px;
        }
        .popconfirm-base-box .row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .popconfirm-base-box .center {
          justify-content: center;
        }
        .popconfirm-base-box .box-item {
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};
```

## 基础用法

Popconfirm 属性同 Tooltip 类似, 是基于 Tooltip 封装的拓展

在 Popconfirm 中, 只有 `title` 可用, `content` 属性无效。

```tsx
import React from 'react';
import { PxPopconfirm, PxButton } from '@mmt817/pixel-ui-react';

export default () => {
  return (
    <PxPopconfirm title="Are you sure to delete this?">
      <PxButton>Delete</PxButton>
    </PxPopconfirm>
  );
};
```

## 自定义弹出框内容

可以在 Popconfirm 中自定义内容

```tsx
import React, { useState } from 'react';
import { PxPopconfirm, PxButton } from '@mmt817/pixel-ui-react';

export default () => {
  const [clicked, setClicked] = useState(false);

  const handleCancel = () => {
    setClicked(true);
  };

  const handleConfirm = () => {
    setClicked(false);
  };

  return (
    <PxPopconfirm
      width="220"
      icon="info-circle-solid"
      iconColor="#626AEF"
      title="Are you sure to delete this?"
      onCancel={handleCancel}
      actions={
        <>
          <PxButton size="small" onClick={handleCancel}>No!</PxButton>
          <PxButton
            type="danger"
            size="small"
            disabled={!clicked}
            onClick={handleConfirm}
          >
            Yes?
          </PxButton>
        </>
      }
    >
      <PxButton>Delete</PxButton>
    </PxPopconfirm>
  );
};
```

## 多种让 Popconfirm 出现的方法

点击按钮触发事件

```tsx
import React from 'react';
import { PxPopconfirm, PxButton } from '@mmt817/pixel-ui-react';

export default () => {
  const confirmEvent = () => {
    console.log('confirm!');
  };

  const cancelEvent = () => {
    console.log('cancel!');
  };

  return (
    <PxPopconfirm
      confirmButtonText="嘻嘻"
      cancelButtonText="No喵"
      confirmButtonType="sakura"
      cancelButtonType="warning"
      icon="info-circle-solid"
      iconColor="#626AEF"
      title="Are you sure to delete this?"
      onConfirm={confirmEvent}
      onCancel={cancelEvent}
    >
      <PxButton>Delete</PxButton>
    </PxPopconfirm>
  );
};
```

## API

### Popconfirm Props

<API id="PxPopconfirm"></API>
