# zyf UI

## 安装

```shell
npm install zyfui

# or

yarn add zyfui

# or (推荐)

pnpm install zyfui
```

## 快速入手

main.js

```js
import 'zyfui/dist/style.css'

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

**组件文档**
> <https://zuowendong.github.io/zyfui/>

## 组件测试

基于cypress组件级测试

运行指令

```shell
pnpm test
```

新建组件测试用例 `*.cy.js`

## 部署测试

本地全局安装 `verdaccio`

```shell
npm i verdaccio -g
```

登录 `verdaccio` 上传项目

```shell
npm adduser --registry=http://localhost:4873

npm login --registry=http://localhost:4873

npm publish --registry=http://localhost:4873
```

另开一个项目，本地安装zyfui

```shell
npm i zyfui --registry=http://localhost:4873
```
