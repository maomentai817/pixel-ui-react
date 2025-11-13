---
group:
  title: Basic 基础组件
  order: 1
title: Icon 图标
toc: content
keywords: [Pixel UI React Icon 图标]
description: Pixel UI React Icon 组件文档
---

# Icon 图标

PixelUI 组件库的图标集合来自 [pixel-icon-library](https://pixeliconlibrary.com/). 提供 400+ 独特的像素化矢量图标, 且各自拥有 4 种变体

## 使用图标

* 如果你想像用例一样**直接使用**, 你需要全局引入第三方图标库, 才能在项目里直接使用。 

## 安装

:::info
方便使用, 已将 pixel-icon-library 集成到 PixelUI 组件库里, 你可以不用引入第三方图标库及其样式。
:::

### 使用包管理器

选择一个你喜欢的包管理器

:::code-group

```shell [npm]
$ npm install @hackernoon/pixel-icon-library
```

```shell [yarn]
$ yarn add @hackernoon/pixel-icon-library
```

```shell [pnpm]
$ pnpm install @hackernoon/pixel-icon-library
```

```shell [bun]
$ bun add @hackernoon/pixel-icon-library
```

```shell [deno]
$ 别用 deno, 会变得不幸
```
:::

### 引入图标库样式

```ts
import '@hackernoon/pixel-icon-library/fonts/iconfont.css'
```

## 基础用法

查阅 [图标库](https://pixeliconlibrary.com/) icon 名称, 通过 `icon` 属性传入即可, 使用 `type`、`color`、`size` 修改图标样式

```tsx
import React from 'react';
import { PxIcon } from '@mmt817/pixel-ui-react';

export default () => {
  return (
    <>
      <p>
        <PxIcon icon="gaming" style={{ marginRight: '10px' }} />
        <PxIcon icon="github" type="primary" style={{ marginRight: '10px' }} />
        <PxIcon icon="management" type="success" style={{ marginRight: '10px' }} />
        <PxIcon icon="plane" type="warning" style={{ marginRight: '10px' }} />
        <PxIcon icon="translate" type="danger" style={{ marginRight: '10px' }} />
        <PxIcon icon="tag-solid" type="sakura" style={{ marginRight: '10px' }} />
      </p>
      <p>
        <PxIcon icon="gaming" size="35" style={{ marginRight: '10px' }} />
        <PxIcon icon="github" type="primary" size="35" style={{ marginRight: '10px' }} />
        <PxIcon icon="management" type="success" size="35" style={{ marginRight: '10px' }} />
        <PxIcon icon="plane" type="warning" size="35" style={{ marginRight: '10px' }} />
        <PxIcon icon="translate" type="danger" size="35" style={{ marginRight: '10px' }} />
        <PxIcon icon="tag-solid" type="sakura" size="35" style={{ marginRight: '10px' }} />
      </p>
      <p>
        <PxIcon icon="gaming" size="20" color="red" style={{ marginRight: '10px' }} />
        <PxIcon icon="github" size="20" color="#ff4785" style={{ marginRight: '10px' }} />
        <PxIcon icon="management" size="20" color="rgb(0,212,255)" style={{ marginRight: '10px' }} />
        <PxIcon icon="plane" size="20" color="hsl(265, 100%, 50%)" style={{ marginRight: '10px' }} />
        <PxIcon icon="translate" size="20" color="hwb(38 0% 0%)" style={{ marginRight: '10px' }} />
      </p>
    </>
  );
};
```

## 图标翻转

通过 `flip` 和 `rotation` 属性控制图标翻转

```tsx
import React from 'react';
import { PxIcon } from '@mmt817/pixel-ui-react';

export default () => {
  return (
    <div>
      <PxIcon
        icon="face-thinking"
        flip="horizontal"
        color="orange"
        size="35"
        style={{ marginRight: '10px' }}
      />
      <PxIcon
        icon="face-thinking"
        flip="vertical"
        color="orange"
        size="35"
        style={{ marginRight: '10px' }}
      />
      <PxIcon
        icon="face-thinking"
        flip="both"
        color="orange"
        size="35"
        style={{ marginRight: '10px' }}
      />
      <PxIcon
        icon="face-thinking"
        rotation="270"
        color="orange"
        size="35"
        style={{ marginRight: '10px' }}
      />
    </div>
  );
};
```

## 图标动画

通过 `spin`、`bounce`、`shake`、`beat` 属性控制图标动画

```tsx
import React from 'react';
import { PxIcon } from '@mmt817/pixel-ui-react';

export default () => {
  return (
    <div>
      <PxIcon icon="startups" spin color="green" size="35" style={{ marginRight: '10px' }} />
      <PxIcon icon="startups" bounce color="green" size="35" style={{ marginRight: '10px' }} />
      <PxIcon icon="startups" shake color="green" size="35" style={{ marginRight: '10px' }} />
      <PxIcon icon="startups" beat color="green" size="35" style={{ marginRight: '10px' }} />
    </div>
  );
};
```

## 图标集合

```tsx
import React from 'react';
import { PxInput, PxIcon } from '@mmt817/pixel-ui-react';

const IconList = {
  "categories": [
    {
      "name": "Brands",
      "items": [
        "android",
        "angellist",
        "apple",
        "behance",
        "bloomberg",
        "bluesky",
        "crunchbase",
        "digg",
        "discord",
        "discourse",
        "facebook-round",
        "facebook-square",
        "figma",
        "giphy",
        "github",
        "golden",
        "google-news",
        "google",
        "hackernoon",
        "huggingface",
        "imgur",
        "instagram",
        "ios",
        "kaggle",
        "linkedin",
        "mastodon",
        "minds",
        "newsbreak",
        "npm",
        "pinterest",
        "podcasts",
        "product-hunt",
        "reddit",
        "rss",
        "steam",
        "threads",
        "tiktok",
        "twitch",
        "twitter",
        "unsplash",
        "viewblocks",
        "wikipedia",
        "x",
        "youtube"
      ]
    },
    {
      "name": "Purcats",
      "items": [
        "business",
        "cloud",
        "cybersecurity",
        "data-science",
        "finance",
        "futurism",
        "gaming",
        "hackernoon-purcat",
        "life-hacking",
        "machine-learning",
        "management",
        "media",
        "product-management",
        "programming",
        "remote",
        "science",
        "society",
        "startups",
        "tech-companies",
        "tech-stories",
        "technology",
        "web3",
        "writing"
      ]
    },
    {
      "name": "Regular",
      "items": [
        "ad",
        "analytics",
        "angle-down",
        "angle-left",
        "angle-right",
        "angle-up",
        "arrow-alt-circle-down",
        "arrow-alt-circle-left",
        "arrow-alt-circle-right",
        "arrow-alt-circle-up",
        "arrow-circle-down",
        "arrow-circle-left",
        "arrow-circle-right",
        "arrow-circle-up",
        "arrow-down",
        "arrow-left",
        "arrow-right",
        "arrow-up",
        "at",
        "badge-check",
        "bank",
        "bars",
        "bell-exclaimation",
        "bell-mute",
        "bell",
        "bold",
        "bolt",
        "book-heart",
        "bookmark",
        "box-usd",
        "brightness-high",
        "brightness-low",
        "bullet-list",
        "bullhorn",
        "calender",
        "cc",
        "chart-line",
        "chart-network",
        "check-box",
        "check-circle",
        "check-list",
        "check",
        "chevron-down",
        "chevron-up",
        "circle-notch",
        "clipboard",
        "clock",
        "cloud-download-alt",
        "cloud-upload",
        "code",
        "cog",
        "comment-dots",
        "comment-quote",
        "comment",
        "comments",
        "copy",
        "credit-card",
        "crown",
        "divider",
        "download-alt",
        "download",
        "edit",
        "ellipses-horizontal-circle",
        "ellipses-horizontal",
        "ellipses-vertical-circle",
        "ellipses-vertical",
        "envelope",
        "exclaimation",
        "exclamation-triangle",
        "expand",
        "external-link",
        "eye-cross",
        "eye",
        "face-thinking",
        "file-import",
        "filter-alt-circle",
        "filter",
        "fire",
        "flag-checkered",
        "flag",
        "folder-open",
        "folder",
        "globe-americas",
        "globe",
        "grid",
        "h1",
        "h2",
        "h3",
        "headphones",
        "heart",
        "highlight",
        "hockey-mask",
        "home",
        "image",
        "info-circle",
        "italics",
        "lightbulb",
        "link",
        "location-pin",
        "lock-alt",
        "lock-open",
        "lock",
        "login",
        "logout",
        "message-dots",
        "message",
        "minus",
        "moon",
        "music",
        "newspaper",
        "numbered-list",
        "octagon-check",
        "octagon-times",
        "page-break",
        "paperclip",
        "paragraph",
        "pause",
        "pen-nib",
        "pen",
        "pencil-ruler",
        "pencil",
        "people-carry",
        "phone-ringing-high",
        "phone-ringing-low",
        "plane-departure",
        "plane",
        "play",
        "playlist",
        "plus",
        "print",
        "pro",
        "question",
        "quote-left",
        "quote-right",
        "receipt",
        "refresh",
        "retro-camera",
        "robot",
        "save",
        "search",
        "seedlings",
        "share",
        "shop",
        "shopping-cart",
        "shuffle",
        "sort",
        "sound-mute",
        "sound-on",
        "spinner-third",
        "spinner",
        "star-crescent",
        "star",
        "strike-through",
        "sun",
        "table",
        "tag",
        "themes",
        "thumbsdown",
        "thumbsup",
        "thumbtack",
        "times-circle",
        "times",
        "translate",
        "trash-alt",
        "trash",
        "trending",
        "trophy",
        "underline",
        "unlock-alt",
        "unlock",
        "upload-alt",
        "upload",
        "user-check",
        "user-headset",
        "user",
        "users-crown",
        "users",
        "vote-yeah",
        "wallet",
        "window-close"
      ]
    },
    {
      "name": "Solid",
      "items": [
        "ad-solid",
        "analytics-solid",
        "angle-down-solid",
        "angle-left-solid",
        "angle-right-solid",
        "angle-up-solid",
        "arrow-alt-circle-down-solid",
        "arrow-alt-circle-left-solid",
        "arrow-alt-circle-right-solid",
        "arrow-alt-circle-up-solid",
        "arrow-circle-down-solid",
        "arrow-circle-left-solid",
        "arrow-circle-right-solid",
        "arrow-circle-up-solid",
        "arrow-down-solid",
        "arrow-left-solid",
        "arrow-right-solid",
        "arrow-up-solid",
        "at-solid",
        "badge-check-solid",
        "bank-solid",
        "bars-solid",
        "bell-exclaimation-solid",
        "bell-mute-solid",
        "bell-solid",
        "bold-solid",
        "bolt-solid",
        "book-heart-solid",
        "bookmark-solid",
        "box-usd-solid",
        "brightness-high-solid",
        "brightness-low-solid",
        "bullet-list-solid",
        "bullhorn-solid",
        "calender-solid",
        "cc-solid",
        "chart-line-solid",
        "chart-network-solid",
        "check-box-solid",
        "check-circle-solid",
        "check-list-solid",
        "check-solid",
        "chevron-down-solid",
        "chevron-up-solid",
        "circle-notch-solid",
        "clipboard-solid",
        "clock-solid",
        "cloud-download-solid",
        "cloud-upload-solid",
        "code-solid",
        "cog-solid",
        "comment-dots-solid",
        "comment-quote-solid",
        "comment-solid",
        "comments-solid",
        "copy-solid",
        "credit-card-solid",
        "crown-solid",
        "divider-solid",
        "download-alt-solid",
        "download-solid",
        "edit-solid",
        "ellipses-horizontal-circle-solid",
        "ellipses-horizontal-solid",
        "ellipses-vertical-circle-solid",
        "ellipses-vertical-solid",
        "envelope-solid",
        "exclaimation-solid",
        "exclamation-triangle-solid",
        "expand-solid",
        "external-link-solid",
        "eye-cross-solid",
        "eye-solid",
        "face-thinking-solid",
        "file-import-solid",
        "filter-alt-circle-solid",
        "filter-solid",
        "fire-solid",
        "flag-checkered-solid",
        "flag-solid",
        "folder-open-solid",
        "folder-solid",
        "globe-americas-solid",
        "globe-solid",
        "grid-solid",
        "heading-1-solid",
        "heading-2-solid",
        "heading-3-solid",
        "headphones-solid",
        "heart-solid",
        "highlight-solid",
        "hockey-mask-solid",
        "home-solid",
        "image-solid",
        "info-circle-solid",
        "italics-solid",
        "lightbulb-solid",
        "link-solid",
        "location-pin-solid",
        "lock-alt-solid",
        "lock-open-solid",
        "lock-solid",
        "login-solid",
        "logout-solid",
        "message-dots-solid",
        "message-solid",
        "minus-solid",
        "moon-solid",
        "music-solid",
        "newspaper-solid",
        "numbered-list-solid",
        "octagon-check-solid",
        "octagon-times-solid",
        "page-break-solid",
        "paperclip-solid",
        "paragraph-solid",
        "pause-solid",
        "pen-nib-solid",
        "pen-solid",
        "pencil-ruler-solid",
        "pencil-solid",
        "people-carry-solid",
        "phone-ringing-high-solid",
        "phone-ringing-low-solid",
        "plane-departure-solid",
        "plane-solid",
        "play-solid",
        "playlist-solid",
        "plus-solid",
        "print-solid",
        "pro-solid",
        "question-solid",
        "quote-left-solid",
        "quote-right-solid",
        "receipt-solid",
        "refresh-solid",
        "retro-camera-solid",
        "robot-solid",
        "save-solid",
        "search-solid",
        "seedlings-solid",
        "share-solid",
        "shop-solid",
        "shopping-cart-solid",
        "shuffle-solid",
        "sort-solid",
        "sound-mute-solid",
        "sound-on-solid",
        "spinner-solid",
        "spinner-third-solid",
        "star-crescent-solid",
        "star-solid",
        "strike-through-solid",
        "sun-solid",
        "table-solid",
        "tag-solid",
        "themes-solid",
        "thumbsdown-solid",
        "thumbsup-solid",
        "thumbtack-solid",
        "times-circle-solid",
        "times-solid",
        "translate-solid",
        "trash-alt-solid",
        "trash-solid",
        "trending-solid",
        "trophy-solid",
        "underline-solid",
        "unlock-alt-solid",
        "unlock-solid",
        "upload-alt-solid",
        "upload-solid",
        "user-check-solid",
        "user-headset-solid",
        "user-solid",
        "users-crown-solid",
        "users-solid",
        "vote-yeah-solid",
        "wallet-solid",
        "window-close-solid"
      ]
    }
  ]
};

export default () => {
  const [query, setQuery] = React.useState('');
  
  const filteredCategories = React.useMemo(() => {
    return IconList.categories
      .map((category) => {
        const items = category.items.filter((icon) =>
          icon.toLowerCase().includes(query.toLowerCase())
        );
        return { ...category, items };
      })
      .filter((category) => category.items.length > 0);
  }, [query]);

  const handleCopy = async (iconName: string) => {
    try {
      await navigator.clipboard.writeText(iconName);
      // 可以在这里添加成功提示
      console.log(`已复制：${iconName}`);
    } catch (err) {
      console.error('复制失败', err);
    }
  };

  return (
    <div>
      <PxInput
        value={query}
        onChange={(value) => setQuery(value)}
        placeholder="搜索图标名称"
        style={{ width: '100%', padding: '8px', fontSize: '16px', marginBottom: '16px' }}
        prefix={<PxIcon icon="search" />}
      />

      {filteredCategories.map((category) => (
        <div key={category.name} style={{ marginTop: '24px' }}>
          <h3
            style={{
              background: 'linear-gradient(10deg, #bd34fe 5%, #e43498 15%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '20px',
            }}
          >
            {category.name}
          </h3>
          <ul
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
              gap: '12px',
              margin: 0,
              padding: 0,
              listStyle: 'none',
            }}
          >
            {category.items.map((icon) => (
              <li
                key={icon}
                onClick={() => handleCopy(icon)}
                className="icon-item"
                style={{
                  height: '80px',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '10px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ecf5ff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <PxIcon
                  size={32}
                  icon={icon}
                  color="var(--px-text-color-sakura)"
                />
                <div
                  style={{
                    fontSize: '12px',
                    marginTop: '6px',
                    flex: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    wordBreak: 'break-word',
                  }}
                >
                  {icon}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <style>{`
        .icon-item {
          background-image: paint(pixelbox);
          --px-border: 3px;
          --px-border-t: 3px;
          --px-border-r: 3px;
          --px-border-b: 3px;
          --px-border-l: 3px;
          --px-border-radius: 2px;
          --px-border-radius-lt: 2px;
          --px-border-radius-rt: 2px;
          --px-border-radius-lb: 2px;
          --px-border-radius-rb: 2px;
          --px-bg-color: transparent;
          --px-border-color: var(--px-text-color-sakura);
          --px-bg-shadow-border: 0;
          --px-bg-shadow-color: transparent;
        }
        .icon-item:hover .px-icon {
          color: var(--px-color-primary) !important;
        }
      `}</style>
    </div>
  );
};
```

## API

### Icon Props

<API id="PxIcon"></API>
