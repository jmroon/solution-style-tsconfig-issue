import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

const checkIfStrictModeEnabled: number | null = null;

console.log(checkIfStrictModeEnabled.toString()); // strict mode is disabled...it was expected to be enabled but the wrong tsconfig is being used
