import { createApp } from "vue";

import App from "./App.vue";
import { createZyfUI } from "./../index";

createApp(App).use(createZyfUI()).mount("#app");
