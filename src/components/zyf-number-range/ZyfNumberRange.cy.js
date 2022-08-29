import ZyfNumberRange from "./ZyfNumberRange.vue";

describe("<ZyfNumberRange />", () => {
	it("renders", () => {
		cy.mount(ZyfNumberRange);
	});
});

const fromInput = '[data-cy="inputFrom"]';
it("输入框默认数据应该为空", () => {
	cy.mount(ZyfNumberRange);
	cy.get(fromInput).should("have.text", "");
});
