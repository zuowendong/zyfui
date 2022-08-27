# zyf UI

## 安装

```shell
npm install zyfui

# or

yarn add zyfui

# or

pnpm install zyfui
```

## 快速入手

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
