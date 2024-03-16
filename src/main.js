import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createI18n } from "vue-i18n";
import en from "./langs/en.json";
import vi from "./langs/vi.json";

const i18n = createI18n({
  globalInjection: true,
  locale: "en",
  fallbackLocale: "vi",
  messages: {
    en,
    vi,
  },
});
createApp(App).use(store).use(router).use(i18n).mount("#app");
