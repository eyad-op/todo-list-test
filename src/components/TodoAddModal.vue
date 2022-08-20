<template>
  <div class="modal">
    <div class="modal__blur">
      <div class="modal__content">
        <div class="modal__header">
          <h2>Создать новую задачу</h2>
          <button @click="$emit('close')">
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="94.926px"
              height="94.926px"
              viewBox="0 0 94.926 94.926"
              style="enable-background: new 0 0 94.926 94.926"
              xml:space="preserve"
            >
              <g>
                <path
                  style="fill: #fff"
                  d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0
		c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096
		c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476
		c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62
		s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z"
                />
              </g>
            </svg>
          </button>
        </div>
        <div class="modal__body">
          <label>Описание</label>
          <input
            ref="todo"
            type="text"
            placeholder="Введите описание"
            :value="newTodo"
            @input="getTodo"
            @keyup.enter="addTodo"
          />
        </div>
        <div class="modal__footer">
          <button @click="addTodo">Создать</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoAddModal",

  methods: {
    getTodo(event) {
      this.$store.dispatch("getTodo", event.target.value);
    },
    addTodo() {
      if (this.$store.getters.newTodo !== "") {
        this.$store.dispatch("addTodo");
        this.$store.dispatch("clearTodo");
        this.$emit("close");
      }
    },
  },

  computed: {
    newTodo() {
      return this.$store.getters.newTodo;
    },
  },
  mounted() {
    this.$refs.todo.focus();
  },
};
</script>

<style lang="scss" scoped>
.modal {
  &__blur {
    position: fixed;
    z-index: 9;
    display: grid;
    place-content: center;
    top: 0;
    left: 0;
    inset: 0;
    backdrop-filter: blur(2px);
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 400px;
    height: 281px;
    padding: 40px;
    background-color: #fff;
    box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & h2 {
      font-size: 18px;
    }
    & button {
      display: grid;
      place-content: center;
      width: 22px;
      height: 22px;
      border: none;
      outline: none;
      border-radius: 4px;
      background-color: #314b99;
      cursor: pointer;
      & svg {
        width: 6px;
        height: 6px;
      }
    }
  }
  &__body {
    display: flex;
    flex-direction: column;
    gap: 5px;
    & label {
      font-size: 14px;
    }
    & input {
      padding: 11px 16px;
      border-radius: 8px;
      border: 1px solid #dde2e4;
      outline: none;
      &::placeholder {
        color: #dde2e4;
      }
    }
  }
  &__footer {
    margin: 0 auto;
    & button {
      padding: 12px 40px;
      border: none;
      border-radius: 8px;
      outline: none;
      background-color: #f0f5ff;
      color: #314b99;
      cursor: pointer;
    }
  }
}
</style>
