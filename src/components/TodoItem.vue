<template>
  <div class="container">
    <div
      class="content todo-item"
      :class="{ completed: todoItem.status }"
      v-for="todoItem in todos"
      :key="todoItem.id"
    >
      <div class="description content">
        <span
          :class="{ checked: todoItem.status }"
          @click="completed(todoItem)"
        ></span>

        <p class="description">{{ todoItem.body }}</p>
      </div>
      <p class="status" :class="{ completed: todoItem.status }">
        {{ todoItem.status ? "Выполнено" : "В работе" }}
      </p>
      <p class="date">{{ formatDate(todoItem.date) }}</p>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/Composables/formatDate.js";
export default {
  props: {
    todoItems: {
      type: Array,
    },
  },

  methods: {
    completed(todo) {
      this.$store.dispatch("completeTodo", todo);
    },
    formatDate(date) {
      return formatDate(date);
    },
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  font-size: 14px;
}
.todo-item {
  height: 58px;
  border-top: 1px solid #eeebe9;
  &:last-child {
    border-bottom: 1px solid #eeebe9;
  }
}
.description {
  flex: 7;
  margin-left: 40px;
}
.status {
  flex: 1;
  margin-right: 14px;
  color: #f89b11;
}
.date {
  flex: 1;
}
.checked {
  display: grid;
  place-content: center;
  border-color: #134ec1;
  box-shadow: 0px 4px 4px rgba(19, 78, 193, 0.15);
  &::after {
    content: url(@/assets/icon-checked.svg);
  }
}
.completed {
  color: #134ec1;
  background-color: #f6f9ff;
}
span {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #16191d;
}
input {
  display: none;
}
</style>
