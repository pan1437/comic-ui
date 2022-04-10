---
nav:
  title: 快速上手
  order: 1
---

# 快速上手

## 安装

**使用 npm 或 yarn 安装**

```shell
npm install comic-ui
```

```shell
yarn add comic-ui
```

## 示例

```js
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app')
const root = createRoot(container);

import Button from 'comic-ui/es/button'; // 手动按需加载 js
import 'comic-ui/es/button/style'; // 手动按需加载 less

root.render(<Button kind="warning">这是一条警告提示</Button>);
```

### 自动按需加载

使用 [babel-plugin-import ](https://www.npmjs.com/package/babel-plugin-import) 优化引入方式，如下：

```js
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app')
const root = createRoot(container);

import { Button } from 'comic-ui'; // 与上述示例等价

root.render(<Button type="primary">这是一个按钮</Button>);
```

安装 `babel-plugin-import`

```shell
yarn add babel-plugin-import --dev
```

配置`.babelrc` 或 `babel-loader`

```json
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "comic-ui",
        "libraryDirectory": "esm", // default: lib
        "style": true // or 'css'
      }
    ]
  ]
}
```
