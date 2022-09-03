<script setup>
import { reactive, ref } from "vue";
import { ElButton } from "element-plus";

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

const tableLayer = [
	{
		label: "序号",
		key: "xid",
		style: {
			width: 60,
			align: "center",
		},
	},
	{
		label: "姓名",
		key: "name",
		style: {
			width: 120,
		},
	},
	{
		label: "年龄",
		key: "age",
		style: {
			width: 80,
		},
	},
	{
		label: "地址",
		key: "address",
		style: {
			minWidth: 150,
			align: "center",
		},
	},
	{
		label: "邮箱",
		key: "email",
		style: {
			minWidth: 100,
		},
	},
	{
		label: "操作",
		key: "查看",
		style: {
			width: 100,
		},
		event: (data) => {
			viewHandle(data);
		},
	},
];

const viewHandle = (rowData) => {
	console.log("App.vue", rowData);
};
</script>

<template>
	<div class="main">
		<div class="textWrap">
			<h3 class="text">消息公告无缝轮播组件</h3>
			<zyf-marquee text="滚动文本滚动文本滚动文本滚动文本滚动文本~" />
		</div>
		<zyf-table :fetch="mockData" :tableFilter="tableFilterList" :tableLayer="tableLayer" :formatFetchData="formatFetch">
			<template #btn>
				<el-button type="primary" plain>
					<el-icon><i-ep-plus /></el-icon>添加
				</el-button>
			</template>
		</zyf-table>
	</div>
</template>

<style lang="scss" scoped>
.main {
	background-color: #eff3f9;
}
.textWrap {
	width: 200px;
	margin: 100px auto;
	.text {
		color: red;
	}
}
</style>
