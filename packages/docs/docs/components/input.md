---
group:
  title: Form 表单组件
  order: 3
title: Input 输入框
toc: content
keywords: [Pixel UI React Input 输入框]
description: Pixel UI React Input 组件文档
---

# Input 输入框

通过鼠标或键盘输入字符

:::danger
Input 为受控组件, 它 **总会显示 React 绑定值**。

在正常情况下, `input` 的输入事件应该被正常响应。它的处理程序应该更新组件的绑定值 (或使用 `value` 和 `onChange`)。否则, 输入框的值将不会改变。
:::

## 基础用法

```tsx
import React, { useState } from 'react';
import { PxInput } from '@mmt817/pixel-ui-react';

export default () => {
  const [input, setInput] = useState('');

  return (
    <PxInput
      value={input}
      onChange={setInput}
      style={{ width: '240px' }}
      placeholder="Please input"
    />
  );
};
```

## 禁用状态

通过 `disabled` 属性设置禁用状态

```tsx
import React, { useState } from 'react';
import { PxInput } from '@mmt817/pixel-ui-react';

export default () => {
  const [input, setInput] = useState('');

  return (
    <PxInput
      value={input}
      onChange={setInput}
      style={{ width: '240px' }}
      disabled
      placeholder="Please input"
    />
  );
};
```

## 一键清空

使用 `clearable` 属性即可得到一个可一键清空的输入框

```tsx
import React, { useState } from 'react';
import { PxInput } from '@mmt817/pixel-ui-react';

export default () => {
  const [input, setInput] = useState('');

  return (
    <PxInput
      value={input}
      onChange={setInput}
      style={{ width: '240px' }}
      placeholder="Please input"
      clearable
    />
  );
};
```

## 密码框

使用 `showPassword` 属性即可得到一个可切换显示隐藏的密码框

```tsx
import React, { useState } from 'react';
import { PxInput } from '@mmt817/pixel-ui-react';

export default () => {
  const [input, setInput] = useState('');

  return (
    <PxInput
      value={input}
      onChange={setInput}
      type="password"
      placeholder="Please input password"
      showPassword
    />
  );
};
```

## 带图标的输入框

带有图标标记输入类型

要在输入框中添加图标, 可通过 `prefix` 和 `suffix` 属性来实现。

```tsx
import React, { useState } from 'react';
import { PxInput, PxIcon, PxText } from '@mmt817/pixel-ui-react';

export default () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <PxText size={12}>Using Props</PxText>
      <PxInput
        value={input1}
        onChange={setInput1}
        style={{ width: '240px' }}
        placeholder="Pick a date"
        suffix={<PxIcon icon="calender-solid" />}
      />
      <PxInput
        value={input2}
        onChange={setInput2}
        style={{ width: '240px' }}
        placeholder="Type something"
        prefix={<PxIcon icon="search" />}
      />
    </div>
  );
};
```

## 文本域

用于输入多行文本信息可缩放的输入框。添加 `type="textarea"` 属性来将 `input` 元素转换为原生的 `textarea` 元素。

文本域高度可通过 `rows` 属性控制

```tsx
import React, { useState } from 'react';
import { PxInput } from '@mmt817/pixel-ui-react';

export default () => {
  const [textarea, setTextarea] = useState('');

  return (
    <PxInput
      value={textarea}
      onChange={setTextarea}
      style={{ width: '240px' }}
      rows={2}
      type="textarea"
      placeholder="Please input"
    />
  );
};
```

## 复合型输入框​

可以在输入框中前置或后置一个元素, 通常是标签或按钮。

可通过 `prepend` 和 `append` 属性来指定在 Input 中分发的前置或者后置的内容。

:::warning
待 `PxSelect` 组件开发完成后补充完整示例
:::

```tsx
import React, { useState } from 'react';
import { PxInput, PxButton, PxIcon } from '@mmt817/pixel-ui-react';

export default () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  return (
    <div>
      <div>
        <PxInput
          value={input1}
          onChange={setInput1}
          style={{ maxWidth: '600px' }}
          placeholder="Please input"
          prepend="Http://"
        />
      </div>
      <div style={{ marginTop: '16px' }}>
        <PxInput
          value={input2}
          onChange={setInput2}
          style={{ maxWidth: '600px' }}
          placeholder="Please input"
          append=".com"
        />
      </div>
      <div style={{ marginTop: '16px' }}>
        <PxInput
          value={input1}
          onChange={setInput1}
          style={{ maxWidth: '600px' }}
          placeholder="Please input"
          append={<PxButton icon="search" />}
        />
        <style>{`
          .px-input__append {
            margin: 0;
            padding: 0;
          }
        `}</style>
      </div>
      <div style={{ marginTop: '16px' }}>
        <PxInput
          value={input1}
          onChange={setInput1}
          style={{ maxWidth: '600px' }}
          placeholder="Please input"
          prepend={<PxButton icon="search" />}
        />
        <style>{`
          .px-input__prepend {
            margin: 0;
            padding: 0;
          }
        `}</style>
      </div>
    </div>
  );
};
```

## 尺寸

通过 `size` 属性设置 Input 的尺寸。

```tsx
import React, { useState } from 'react';
import { PxInput } from '@mmt817/pixel-ui-react';

export default () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <PxInput
          value={input1}
          onChange={setInput1}
          style={{ width: '240px' }}
          size="large"
          placeholder="Please Input"
        />
        <PxInput
          value={input2}
          onChange={setInput2}
          style={{ width: '240px' }}
          placeholder="Please Input"
        />
        <PxInput
          value={input3}
          onChange={setInput3}
          style={{ width: '240px' }}
          size="small"
          placeholder="Please Input"
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <PxInput
          value={input1}
          onChange={setInput1}
          style={{ width: '240px' }}
          size="large"
          placeholder="Please Input"
        />
        <PxInput
          value={input2}
          onChange={setInput2}
          style={{ width: '240px' }}
          placeholder="Please Input"
        />
        <PxInput
          value={input3}
          onChange={setInput3}
          style={{ width: '240px' }}
          size="small"
          placeholder="Please Input"
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <PxInput
          value={input1}
          onChange={setInput1}
          style={{ width: '240px' }}
          size="large"
          placeholder="Please Input"
        />
        <PxInput
          value={input2}
          onChange={setInput2}
          style={{ width: '240px' }}
          placeholder="Please Input"
        />
        <PxInput
          value={input3}
          onChange={setInput3}
          style={{ width: '240px' }}
          size="small"
          placeholder="Please Input"
        />
      </div>
    </>
  );
};
```

## API

### Input Props

<API id="PxInput"></API>

### Input Methods

通过 ref 可以访问到以下方法：

| 方法名 | 说明 | 类型 |
| --- | --- | --- |
| focus | 使输入框获得焦点 | `() => void` |
| blur | 使输入框失去焦点 | `() => void` |
| select | 选中输入框中的文本 | `() => void` |
| clear | 清空输入框内容 | `(event: React.MouseEvent<HTMLElement>) => void` |