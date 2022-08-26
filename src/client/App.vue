<script setup lang="ts">
import { onMounted, ref } from "vue";

const button = ref<ZyfButtonFunc>();
onMounted(() => {
	button.value?.setProperty("--bg", "red");
});

const mockData = [{ xid: 1111, name: "jack" }];
let tableFilterList = ref([
	{ type: "input", label: "企业名称：", field: "enterpriseName", inputModel: "" },
	{
		type: "select",
		label: "企业状态：",
		field: "enterpriseState",
		selectModel: "",
		options: [
			{ name: "全部", id: "" },
			{ name: "已审核", id: "已审核" },
			{ name: "待审核", id: "待审核" },
		],
	},
	{ type: "input", label: "企业名称：", field: "enterpriseName", inputModel: "" },
	{
		type: "select",
		label: "企业状态：",
		field: "enterpriseState",
		selectModel: "",
		options: [
			{ name: "全部", id: "" },
			{ name: "已审核", id: "已审核" },
			{ name: "待审核", id: "待审核" },
		],
	},
	{ type: "input", label: "企业名称：", field: "enterpriseName", inputModel: "" },
	{
		type: "select",
		label: "企业状态：",
		field: "enterpriseState",
		selectModel: "",
		options: [
			{ name: "全部", id: "" },
			{ name: "已审核", id: "已审核" },
			{ name: "待审核", id: "待审核" },
		],
	},
	{ type: "input", label: "企业名称：", field: "enterpriseName", inputModel: "" },
	{
		type: "select",
		label: "企业状态：",
		field: "enterpriseState",
		selectModel: "",
		options: [
			{ name: "全部", id: "" },
			{ name: "已审核", id: "已审核" },
			{ name: "待审核", id: "待审核" },
		],
	},
]);
</script>

<template>
	<div class="main">
		<!-- <zyf-button ref="button">
        Hello world
        <template #tag>tag</template>
    </zyf-button> -->

		<div class="textWrap">
			<h3>消息公告无缝轮播组件</h3>
			<zyf-marquee text="滚动文本滚动文本滚动文本滚动文本滚动文本~" />
		</div>
		<zyf-table :fetch="mockData" :tableFilter="tableFilterList">
			<template #btn>
				<el-button type="primary" plain>
					<el-icon><i-ep-plus /></el-icon>添加
				</el-button>
			</template>
			<el-table-column prop="xid" label="序号" width="60" />
			<el-table-column prop="name" label="姓名" min-width="100" />
			<el-table-column prop="xid" label="年龄" width="100" />
			<el-table-column prop="xid" label="地址" min-width="200" />
			<el-table-column label="操作" width="100">
				<template #default="{ row }">
					<el-button link type="primary" size="small" @click="handleView(row)">查看</el-button>
				</template>
			</el-table-column>
		</zyf-table>
	</div>
</template>

<style scoped>
.main {
	background-color: #eff3f9;
}
.textWrap {
	width: 200px;
	margin: 100px auto;
}
</style>
