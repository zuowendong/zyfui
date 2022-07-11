import { createZyfUI } from "./../index";
import { createApp } from "vue";
import App from "./App.vue";

import { components } from "../index";

createApp(App).use(createZyfUI()).mount("#app");
