import { createStore } from "vuex";
import { formatDate } from "@/Composables/formatDate";
const sort = { date: "date", status: "status" };

export default createStore({
  state: {
    todos: [],
    newTodo: "",
    sort: sort.date,
    search: "",
  },
  mutations: {
    setStore() {
      if (localStorage.getItem("todoList")) {
        this.replaceState(JSON.parse(localStorage.getItem("todoList")));
      }
    },
    getTodo(state, todo) {
      state.newTodo = todo;
    },
    addTodo(state) {
      state.todos = [
        {
          id: state.todos.length + 1,
          body: state.newTodo,
          status: false,
          date: new Date().toISOString(),
        },
        ...state.todos,
      ];
    },
    completeTodo(state, todo) {
      todo.status = !todo.status;
    },
    clearTodo(state) {
      state.newTodo = "";
    },
    setSort(state, sort) {
      state.sort = sort;
    },
    setSearch(state, search) {
      state.search = search;
    },
  },
  actions: {
    setStore({ commit }) {
      commit("setStore");
    },
    getTodo({ commit }, todo) {
      commit("getTodo", todo);
    },
    addTodo({ commit }) {
      commit("addTodo");
    },
    completeTodo({ commit }, todo) {
      commit("completeTodo", todo);
    },
    clearTodo({ commit }) {
      commit("clearTodo");
    },
    setSort({ commit }, sort) {
      commit("setSort", sort);
    },
    setSearch({ commit }, search) {
      commit("setSearch", search);
    },
  },
  getters: {
    newTodo: (state) => state.newTodo,
    todos: (state) => {
      let searchResult = null;
      if (state.search !== "") {
        searchResult = state.todos.filter((todo) => {
          return (
            todo.id == state.search ||
            todo.body.includes(state.search) ||
            (todo.status &&
              "Выполнено".toLowerCase().includes(state.search.toLowerCase())) ||
            (!todo.status &&
              "В работе".toLowerCase().includes(state.search.toLowerCase())) ||
            formatDate(todo.date).includes(state.search)
          );
        });
      } else {
        searchResult = state.todos;
      }
      if (state.sort === sort.date) {
        return searchResult;
      } else {
        return [...searchResult].sort((item) => (item.status ? -1 : 1));
      }
    },
    getSort: (state) => state.sort,
    getSearch: (state) => state.search,
  },
});
