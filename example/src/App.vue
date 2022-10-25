<template>
	<div>
		<ZyfTable
			ref="tableRef"
			:fetch="mockData"
			:fetch-params="{}"
			:table-filter="tableFilterList"
			:table-layer="tableLayer"
		>
			<template #btn>
				<el-button type="primary" plain :icon="Plus" @click="createHandle">添加设备</el-button>
			</template>
			<template #tableLayerOther>
				<el-table-column label="操作" fixed="right" width="150">
					<template #default="{ row }">
						<el-button link type="text" @click="editHandle(row)">编辑</el-button>
						<el-button link type="text" @click="deleteHandle(row)">删除</el-button>
					</template>
				</el-table-column>
			</template>
		</ZyfTable>
	</div>
</template>

<script setup>
import { ref, reactive, toRefs } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { ZyfTable } from "@zyfjs/ui";

/**
 * 筛选条件
 */
let tableFilterList = reactive([
	{ type: "input", label: "机构名称", field: "stationName", inputModel: "" },
	{ type: "input", label: "设备编号", field: "stationName", inputModel: "" },
]);

let tableRef = ref();

const mockData = [
	{ xid: 1, type: "总部" },
	{ xid: 2, type: "分支机构" },
];

/**
 * table 布局
 */
const tableLayer = reactive([
	{ label: "设备编号", key: "xid", style: { width: 130 } },
	{ label: "设备类型", key: "xid", style: { width: 100 } },
	{ label: "型号规格", key: "xid", style: { minWidth: 140 } },
	{ label: "设备状态", key: "type", style: { width: 100 } },
	{ label: "设备厂家", key: "xid", style: { width: 130 } },
	{ label: "设备检定单位", key: "xid", style: { minWidth: 100 } },
	{ label: "有效日期", key: "xid", style: { width: 120 } },
	{ label: "备注", key: "xid", style: { minWidth: 100 } },
	{ label: "仪器所在地", key: "xid", style: { width: 120 } },
]);
const formatFetchFun = (tableData) => {
	return tableData.map((item) => {
		return {
			...item,
		};
	});
};

let isDetail = ref(false);
let detailType = ref("");
const createHandle = () => {
	isDetail.value = true;
	detailType.value = "create";
};
const editHandle = () => {
	isDetail.value = true;
	detailType.value = "update";
};

// 删除事件
const deleteHandle = (rowData) => {
	ElMessageBox.confirm("确定删除吗?", "提示", {
		confirmButtonText: "确定",
		cancelButtonText: "取消",
		type: "warning",
	})
		.then(async () => {
			console.log("delete");
		})
		.catch(() => {});
};
</script>

<style lang="scss" scoped></style>
