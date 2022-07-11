import './style/index.css'

import { forEach } from "lodash-es";
import type { App } from "vue";
import * as components from "./components/index";

export const createZOUI = () => ({
    install: (app: App) => {
        forEach(components, (component) => {
            app.component(component.name, component);
        });
    },
});

export { components };
