import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FontAwesomeIcon from "@/plugins/font-awesome";
import i18n from "@/plugins/i18n";

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(i18n)
  .mount("#app");
