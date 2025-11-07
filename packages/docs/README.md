# Pixel UI React 文档

这是 Pixel UI React 组件库的文档站点，基于 [Dumi](https://d.umijs.org/) 构建。

## 开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建文档
pnpm build

# 预览构建结果
pnpm preview
```

## 项目结构

```
dumi/
├── .dumirc.ts          # Dumi 配置文件
├── src/
│   ├── index.tsx      # 全局入口文件（注册组件库）
│   └── index.css       # 全局样式（像素字体等）
├── docs/               # 文档目录
│   ├── index.md        # 首页
│   ├── getting-started.md  # 快速开始
│   └── components/     # 组件文档
├── demo/               # 组件示例
│   └── Button/
│       └── Basic.tsx   # Button 基础示例
└── public/             # 静态资源
    ├── fonts/          # 像素字体
    └── images/         # 图片资源
```

## 文档规范

### 组件文档

组件文档应放在 `docs/components/` 目录下，使用 Markdown 格式编写。

### 示例代码

示例代码应放在 `demo/组件名/` 目录下，使用 React 组件（.tsx）格式编写。

在文档中使用 `<code src="../../demo/Button/Basic.tsx" />` 引用示例。

## 样式说明

文档站点使用像素风格字体（Zpix 和 PS2P），样式定义在 `src/index.css` 中。

