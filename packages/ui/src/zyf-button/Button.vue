<template>
	<span class="btn">zyf-button: {{ testStr }}</span>
	<button>
		<slot />
	</button>
</template>

<script>
import "./style";
import { defineComponent, ref } from "vue";
import { isStr } from "@zyfjs/utils";

export default defineComponent({
	name: "ZyfButton",
	setup() {
		const testStr = ref("");
		testStr.value = isStr("test") ? "isString" : "noString";
		return {
			testStr,
		};
	},
});
</script>
