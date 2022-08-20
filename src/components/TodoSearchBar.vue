<template>
  <div class="container content">
    <div class="block__search content">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.8645 11.3208H12.0515L11.7633 11.0429C12.7719 9.86964 13.3791 8.34648 13.3791 6.68954C13.3791 2.99485 10.3842 0 6.68954 0C2.99485 0 0 2.99485 0 6.68954C0 10.3842 2.99485 13.3791 6.68954 13.3791C8.34648 13.3791 9.86964 12.7719 11.0429 11.7633L11.3208 12.0515V12.8645L16.4666 18L18 16.4666L12.8645 11.3208ZM6.68954 11.3208C4.12693 11.3208 2.05832 9.25214 2.05832 6.68954C2.05832 4.12693 4.12693 2.05832 6.68954 2.05832C9.25214 2.05832 11.3208 4.12693 11.3208 6.68954C11.3208 9.25214 9.25214 11.3208 6.68954 11.3208Z"
          fill="#59BBA6"
        />
      </svg>
      <input
        type="search"
        placeholder="Поиск ID, Имени, статуса или даты"
        @input="onChangeSearch($event)"
        :value="searchValue"
      />
    </div>
    <div class="block__sort content">
      <span>Сортировать по:</span>
      <select name="date" id="date" @change="onChangeSort($event)">
        <option value="date" key="date" :selected="sortValue === 'date'">
          Дата
        </option>
        <option value="status" key="status" :selected="sortValue === 'status'">
          Статус
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onChangeSort(event) {
      this.$store.dispatch("setSort", event.target.value);
    },
    onChangeSearch(event) {
      this.$store.dispatch("setSearch", event.target.value);
    },
  },
  computed: {
    searchValue() {
      return this.$store.getters.getSearch;
    },
    sortValue() {
      return this.$store.getters.getSort;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 30px;
}
.block {
  &__search {
    margin-left: 40px;

    & input {
      margin-left: 16px;
      width: 227px;
      border: none;
      outline: none;
      &::placeholder {
        color: #c4c4c4;
      }
    }
  }
  &__sort {
    & span {
      margin-right: 15px;
    }
    & select {
      border: none;
      outline: none;
    }
  }
}
</style>
