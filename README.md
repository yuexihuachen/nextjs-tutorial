This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 教程

- 普通路由 - 文件夹实现
- 嵌套路由 - 文件夹嵌套
- 动态路由 - products/[productId]
- 嵌套动态路由 - 动态路由和普通路由的组合
- 捕获所有的路由路径段 - [slug]匹配1个路径段，[...slug]匹配多个路径段，[[...slug]]匹配零个路径段
- 自定义notFound页面 - 和layout同一层
- 文件协同定位（File Colocation）- 将相关的代码放在同一个目录（lib,utils,hooks）
- 私有目录 - 比如_lib，_utils
- 路由组 - 避免相关路由分散到整个应用，auth/(login|register|forgetPassword),auth添加括号(auth)从url路径中排除
- 布局(Layout) - 布局是多个页面之间共享的UI,支持多个布局(配合路由组)和嵌套布局
- 元数据（Metadata）- title，description，自定义设置路由元数据Routing Metadata（generateMetadata）
- 组件链接的路由（Link）- 跳转到其他路由,当前路由
- 21