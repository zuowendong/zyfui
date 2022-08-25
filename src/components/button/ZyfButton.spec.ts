import { expect, describe, it } from "vitest";
import { mount } from "@vue/test-utils";

import ZyfButton from "./ZyfButton.vue";

describe("ZyfButton Test", () => {
	// 参考文档：https://test-utils.vuejs.org/guide/#what-is-vue-test-utils
	it("should render slot", () => {
		const zobutton = mount(ZyfButton, {
			slots: {
				default: "Hello world",
			},
		});
		expect(zobutton.text()).toContain("Hello world");
	});
});
