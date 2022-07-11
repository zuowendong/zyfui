import { createZOUI } from "./../index";
import { createApp } from "vue";
import App from "./App.vue";

import { components } from "../index";

createApp(App).use(createZOUI()).mount("#app");
