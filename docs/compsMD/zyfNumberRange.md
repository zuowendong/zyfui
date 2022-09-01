# zyf-number-range

## 属性

名称 | 说明 | 类型
--- | :--- | :---
modelValue | 数字范围，[min, max] | array
disabled | 是否禁用，默认false | boolean
precision | 精度，默认整数 | number

## 示例

```html
<zyf-number-range v-model="numberRange" />
```

```js
import {ref} from 'vue'
let numberRange = ref([0, 10])
```
