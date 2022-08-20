<template>
  <div class="container">
    <div class="content">
      <h1>Todo list</h1>
      <button @click="showModal = true">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="9" width="2" height="20" fill="#314B99" />
          <rect
            x="20"
            y="9"
            width="2"
            height="20"
            transform="rotate(90 20 9)"
            fill="#314B99"
          />
        </svg>
      </button>
    </div>
    <TodoAddModal v-if="showModal" @close="close" />
  </div>
</template>

<script>
import TodoAddModal from "./TodoAddModal.vue";
export default {
  components: { TodoAddModal },
  data: () => {
    return {
      showModal: false,
    };
  },
  methods: {
    close() {
      this.showModal = false;
      this.$store.dispatch("clearTodo");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 104px auto 0;
}
h1 {
  font-size: 1.5rem;
  margin-left: 40px;
  font-family: "Montserrat", sans-serif;
}
button {
  display: grid;
  place-content: center;
  width: 40px;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 50%;
  background-color: #d6dbeb;
  cursor: pointer;
}
</style>
