<template>
	<div class="textWrap">
		<span class="text">zyf-text: {{ testStr }}</span>
	</div>
</template>

<script>
import "./style";
import { defineComponent, ref } from "vue";
import { isStr } from "@zyfjs/utils";

export default defineComponent({
	name: "VarButton",
	setup() {
		const testStr = ref("");
		testStr.value = isStr("test") ? "isString" : "noString";
		return {
			testStr,
		};
	},
});
</script>
