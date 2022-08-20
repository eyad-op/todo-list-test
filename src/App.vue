<template>
  <TodoApp />
</template>

<script>
import TodoApp from "./components/TodoApp.vue";
export default {
  name: "App",
  components: {
    TodoApp,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap");
@font-face {
  font-family: "Velasans";
  src: url("@/fonts/velasans-web/VelaSans-Regular.woff2") format("woff2");
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Velasans", sans-serif;
  color: #16191d;
}
.container {
  margin: 0 auto;
  max-width: 1300px;
}
</style>
