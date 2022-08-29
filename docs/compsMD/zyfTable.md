## zyf-table

### 属性

名称 | 说明 | 类型
--- | :--- | :---
fetch | table数据请求接口 | function / array
fetchParams | 数据请求参数 | object
tableLayer | 表格布局渲染数据 | array
formatFetchData | 表格布局渲染数据格式化方法 | function
tableFilter | 头部筛选条件 | array
showTableIdx | 是否开启字段计算序号 | boolean
showFooter | 是否显示分页 | boolean

### 示例

#### 基本使用

```html
<zyf-table :fetch="mockData" :tableFilter="tableFilterList">
   <template #btn>
    <el-button type="primary" plain>
     <el-icon><i-ep-plus /></el-icon>添加
    </el-button>
   </template>
   <el-table-column prop="xid" label="序号" width="60" />
   <el-table-column prop="name" label="姓名" width="120" />
   <el-table-column prop="age" label="年龄" width="80" />
   <el-table-column prop="address" label="地址" min-width="150" />
   <el-table-column prop="email" label="地址" min-width="120" />
   <el-table-column label="操作" width="100">
    <template #default="{ row }">
     <el-button link type="primary" @click="viewHandle(row)">查看</el-button>
    </template>
   </el-table-column>
</zyf-table>
```

```js
const mockData = [
 { xid: 1, name: "jack", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" },
 { xid: 2, name: "lucy", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" },
 { xid: 3, name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" },
 { xid: 4, name: "jack", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" },
 { xid: 5, name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" },
 { xid: 6, name: "lucy", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" },
 { xid: 7, name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" },
 { xid: 8, name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" },
 { xid: 9, name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" },
 { xid: 10, name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" },
 { xid: 11, name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" },
 { xid: 12, name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" },
 { xid: 13, name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" },
 { xid: 14, name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" },
 { xid: 15, name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" },
 { xid: 16, name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" },
 { xid: 17, name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" },
 { xid: 18, name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" },
 { xid: 19, name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" },
 { xid: 20, name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" },
 { xid: 21, name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" },
 { xid: 22, name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" },
];

let tableFilterList = reactive([
 { type: "input", label: "姓名", field: "name", inputModel: "" },
 { type: "numberRange", label: "年龄区间", field: "age", selectModel: "" },
 {
  type: "select",
  label: "地址",
  field: "address",
  selectModel: "",
  options: [
   { name: "全部", id: "" },
   { name: "苏州", id: "苏州" },
   { name: "南京", id: "南京" },
   { name: "上海", id: "上海" },
  ],
 },
 { type: "input", label: "邮箱", field: "email", inputModel: "" },
]);
```

#### 使用表格布局渲染数据

```html
<zyf-table :fetch="mockData" :tableFilter="tableFilterList" :tableLayer="tableLayer" :formatFetchData="formatFetch">
  <template #btn>
  <el-button type="primary" plain>
    <el-icon><i-ep-plus /></el-icon>添加
  </el-button>
  </template>
</zyf-table>
```

```js
// const mockData = ...
// let tableFilterList = ...
const tableLayer = [
 { label: "序号", key: "xid",
   style: {
    width: 60,
    align: "center",
   },
 },
 { label: "姓名", key: "name",
   style: {
    width: 120,
   },
 },
 { label: "年龄", key: "age",
   style: {
    width: 80,
   },
 },
 { label: "地址", key: "address",
   style: {
    minWidth: 150,
    align: "center",
   },
 },
 { label: "邮箱", key: "email",
   style: {
    minWidth: 100,
   },
 },
 { label: "操作", key: "查看",
   style: {
    width: 100,
   },
   event: (data) => {
    viewHandle(data);
   },
 },
];
```

当接口返回数据不是平级结构，使用formatFetchData作为中间层处理数据格式，例如数据格式：

```js
const mockData = [
 { xid: 1, info: { name: "jack", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" } },
 { xid: 2, info: { name: "lucy", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" } },
 { xid: 3, info: { name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" } },
 { xid: 4, info: { name: "jack", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" } },
 { xid: 5, info: { name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" } },
 { xid: 6, info: { name: "lucy", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" } },
 { xid: 7, info: { name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" } },
 { xid: 8, info: { name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" } },
 { xid: 9, info: { name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" } },
 { xid: 10, info: { name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" } },
 { xid: 11, info: { name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" } },
 { xid: 12, info: { name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" } },
 { xid: 13, info: { name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" } },
 { xid: 14, info: { name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" } },
 { xid: 15, info: { name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" } },
 { xid: 16, info: { name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" } },
 { xid: 17, info: { name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" } },
 { xid: 18, info: { name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" } },
 { xid: 19, info: { name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" } },
 { xid: 20, info: { name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" } },
 { xid: 21, info: { name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" } },
 { xid: 22, info: { name: "tom", age: 18, address: "苏州市姑苏区干将西路", email: "xxx@xxx.cn" } },
];

const formatFetch = (tableData) => {
 return tableData.map((item) => {
  return {
   ...item,
   ...item.info,
  };
 });
};
```
