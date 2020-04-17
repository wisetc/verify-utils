# verify

业务中涉及到的表单常用的校验工具库。

## 使用方法

安装依赖

```bash
$ npm i @wisetc/verify
```

使用 idcard 中的 API。

```js
import { idcard } from '@wisetc/verify';

console.log(idcard.isIDCard('421081190001016012'));
```

## 功能列表

目前已支持

- idcard
