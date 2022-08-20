<template>
  <div class="container">
    <div class="content">
      <p class="title title__description">Описание</p>
      <p class="title title__status">Статус</p>
      <p class="title title__date">Дата</p>
    </div>
    <TodoItem />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  components: { TodoItem },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 30px;
}

.title {
  height: 32px;
  line-height: 36px;
  border-left: 1px solid #c4c4c4;
  padding-left: 20px;
  font-size: 14px;

  &__description {
    flex: 13;
    margin-left: 80px;
  }
  &__status {
    flex: 2;
  }
  &__date {
    flex: 2;
  }
}
</style>
