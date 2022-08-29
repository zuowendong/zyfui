<script>
export default { name: "ZyfNumberRange" };
</script>

<script setup>
const props = defineProps({
	modelValue: {
		type: Array,
		default: () => {
			return [];
		},
	},
	disabled: {
		type: Boolean,
		default: false,
	}, // 是否禁用
	precision: {
		type: Number,
		default: 0,
		validator(val) {
			return val >= 0 && val === parseInt(val, 10);
		},
	}, // 精度
});
let { modelValue, disabled, precision } = toRefs(props);
const emit = defineEmits(["update:modelValue", "input"]);

let userInputForm = ref(0);
let userInputTo = ref(0);

watch(
	() => props.modelValue,
	(value) => {
		if (value instanceof Array && precision.value !== undefined) {
			userInputForm.value = typeof value[0] === "number" ? value[0] : null;
			userInputTo.value = typeof value[1] === "number" ? value[1] : null;
		}
	},
	{
		deep: true,
		immediate: true,
	}
);

// 根据精度保留数字
const toPrecision = (num, precision) => {
	if (precision === undefined) precision = 0;
	return parseFloat(Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision));
};

// from输入框change事件
const inputChangeFromHandle = (value) => {
	// 如果是非数字空返回null
	if (isNaN(value) || value === "") {
		emit("update:modelValue", [null, userInputTo.value]);
		return;
	}

	// 初始化数字精度
	userInputForm.value = setPrecisionValue(value);

	// 如果from > to 将from值替换成to
	if (typeof userInputTo.value === "number") {
		userInputForm.value =
			parseFloat(userInputForm.value) <= parseFloat(userInputTo.value) ? userInputForm.value : userInputTo.value;
	}
	emit("update:modelValue", [userInputForm.value, userInputTo.value]);
	//   emit('update:modelValue', userInputForm.value)
};

// to输入框change事件
const inputChangeToHandle = (value) => {
	// 如果是非数字空返回null
	if (isNaN(value) || value === "") {
		emit("update:modelValue", [userInputForm.value, null]);
		return;
	}

	// 初始化数字精度
	userInputTo.value = setPrecisionValue(value);

	// 如果to < tfrom 将to值替换成from
	if (typeof userInputForm.value === "number") {
		userInputTo.value =
			parseFloat(userInputTo.value) >= parseFloat(userInputForm.value) ? userInputTo.value : userInputForm.value;
	}
	emit("update:modelValue", [userInputForm.value, userInputTo.value]);
};

// 设置成精度数字
const setPrecisionValue = (value) => {
	if (precision.value !== undefined) {
		const val = toPrecision(value, precision.value);
		return val;
	}
	return null;
};
</script>

<template>
	<div class="numberRangeMain" :class="{ 'is-disabled': disabled }">
		<div class="from">
			<el-input
				data-cy="inputFrom"
				ref="input_from"
				v-model="userInputForm"
				:disabled="disabled"
				placeholder="最小值"
				@change="inputChangeFromHandle"
			/>
		</div>
		<div class="center">
			<span>至</span>
		</div>
		<div class="to">
			<el-input
				ref="input_to"
				v-model="userInputTo"
				:disabled="disabled"
				placeholder="最大值"
				@change="inputChangeToHandle"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.numberRangeMain {
	display: flex;
	align-items: center;
	background-color: #fff;
	.center {
		margin: 0 10px;
	}
}
.from,
.to {
	:deep(.el-input .el-input__inner) {
		width: 100px;
		border: 0px;
		margin: 0;
		padding: 0 15px;
		background-color: transparent;
	}
}
.is-disabled {
	background-color: #eef0f6;
	border-color: #e4e7ed;
	color: #c0c4cc;
	cursor: not-allowed;
}
</style>
