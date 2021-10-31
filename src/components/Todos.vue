<template lang="pug">
  .todos
    .todos__star ❋
    .todos__list
      .todos__list__todo(v-for="todo in todosList" :key="todo.id")
        .todos__list__todo__time {{ todo.datetime }}
        .todos__list__todo__text {{ todo.text }}
        .todos__list__todo__remove
          span(style="font-size:2rem; line-height:1rem") ×
    .todos__input-area
      input.todos__input-area__time(v-model="time" type="time")
      input.todos__input-area__todo(v-model="todo")
      button.todos__input-area__but-add(@click.stop="onClickButton")
        span(style="font-size:2rem") +
</template>

<script>

export default {
  name: 'Todos',
  data() {
    return {
      time: '',
      todo: ''
    }
  },
  computed: {
    todosList() {
      return this.$store.state.todos
    }
  },
  methods: {
    onClickButton(e) {
      console.log('onClickButton', e)
      console.log('datetime', this.time)
      if (this.time && this.todo) {
        this.$store.commit('addTodo', { text: this.todo, datetime: this.time })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .todos {
    width: 400px;
    height: 250px;
    background: white;
    border: 1px solid #DEDEE1;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 30px;
    padding-top: 20px;
    display: grid;
    grid: 40px auto 40px / auto;

    &__star {
      grid-row: 1;
      font-size: 2rem;
      text-align: right;
      padding-right: 5px;
    }

    &__list {
      grid-row: 2;
      overflow: auto;
      display: flex;
      margin: 10px 0;
      flex-direction: column-reverse;
      &__todo {
        display: flex;
        height: 30px;
        &__time {
          flex-basis: 80px;
          line-height: 30px;
        }
        &__text {
          flex: 1;
          margin: 0 10px;
          text-align: left;
          line-height: 30px;
          padding-left: 10px;
        }
        &__remove {
          flex-basis: 40px;
          font-size: 2rem;
          line-height: 30px;
          color: gray;
        }
      }
    }

    &__input-area {
      grid-row: 3;
      display: flex;
      &__time {
        flex-basis: 80px;
      }
      &__todo {
        flex: 1;
        margin: 0 10px;
      }
      &__but-add {
        flex-basis: 40px;
        font-size: 2rem;
        padding-top: 2px;
      }
    }
  }
</style>