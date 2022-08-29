# 快速入手

## 安装

<CodeGroup>
  <CodeGroupItem title="pnpm" active>

```bash:no-line-numbers
pnpm install zyfui
```

  </CodeGroupItem>

  <CodeGroupItem title="yarn" >

```bash:no-line-numbers
yarn add zyfui
```

  </CodeGroupItem>
  <CodeGroupItem title="npm" active>

```bash:no-line-numbers
npm install zyfui
```

  </CodeGroupItem>
</CodeGroup>

## 使用

main.js 中

```js
import { createApp } from "vue";
import App from "./App.vue";
import { createZyfUI } from "zyfui";

createApp(App).use(createZyfUI()).mount("#app");
```

## 开发

**新建**

src -> components -> 新建组件文件 ( 例：zyf-text -> ZyfText.vue )

**注册**

components -> index.js

```js
export { default as ZyfText } from "./zyf-text/ZyfText.vue";
```

## 测试

本地全局安装 `verdaccio`

```shell
pnpm i verdaccio -g
```

登录 `verdaccio` 上传项目

```shell
pnpm login --registry=http://localhost:4873

npm publish --registry=http://localhost:4873
```

另开一个项目，本地安装zyfui

```shell
pnpm i zyfui --registry=http://localhost:4873
```
