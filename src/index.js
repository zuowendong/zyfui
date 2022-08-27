import { forEach } from "lodash-es";
import * as components from "./components/index";

export const createZyfUI = () => ({
	install: (app) => {
		forEach(components, (component) => {
			app.component(component.name, component);
		});
	},
});

export { components };
