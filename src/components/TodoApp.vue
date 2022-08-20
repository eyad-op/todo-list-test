<template>
  <div>
    <TodoHeader />
    <TodoSearchBar />
    <TodoList />
  </div>
</template>

<script>
import TodoHeader from "./TodoHeader.vue";
import TodoSearchBar from "./TodoSearchBar.vue";
import TodoList from "./TodoList.vue";
export default { components: { TodoHeader, TodoSearchBar, TodoList } };
</script>

<style lang="scss">
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
