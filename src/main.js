import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";
import router from "./routes/routes.js";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./fb.js"

console.log('here', firebaseConfig)

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAnalytics = getAnalytics(firebaseApp);

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .mount("#app");
