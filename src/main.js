import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

store.subscribe((mutation, state) => {
  localStorage.setItem("todoList", JSON.stringify(state));
});
store.dispatch("setStore");
createApp(App).use(store).mount("#app");
