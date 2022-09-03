import { forEach } from "lodash-es";
import * as components from "./components/index";

// 发版前注释
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

export const createZyfUI = () => ({
	install: (app) => {
		forEach(components, (component) => {
			// app.use(ElementPlus)
			app.component(component.name, component);
		});
	},
});

export { components };
