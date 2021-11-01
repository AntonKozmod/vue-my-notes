<template lang="pug">
  .todos
    .todos__star ❋
    .todos__list
      .todos__list__todo(v-for="todo in todosList" :key="todo.id")
        .todos__list__todo__time {{ todo.time }}
        .todos__list__todo__text {{ todo.text }}
        button.todos__list__todo__remove(@click.stop="removeTodo(todo.id)")
          span(style="font-size:2rem; line-height:1rem") ×
    .todos__input-area
      input.todos__input-area__time(v-model="time" type="time")
      input.todos__input-area__todo(v-model="todo")
      button.todos__input-area__but-add(@click.stop="addTodo")
        span(style="font-size:2rem") +
</template>

<script>

export default {
  name: 'Todos',
  props: {
    selectedWeek: String
  },
  data() {
    return {
      time: '',
      todo: ''
    }
  },
  computed: {
    todosList() {
      return this.$store.getters.getTodosWeek(this.selectedWeek) ? this.$store.getters.getTodosWeek(this.selectedWeek).sort((a,b) => a.time > b.time ? 1 : -1) : []
    }
  },
  methods: {
    addTodo() {
      if (this.time && this.todo) {
        this.$store.commit('addTodo', { text: this.todo, time: this.time, week: this.selectedWeek })
        this.time = ''
        this.todo = ''
      }
    },
    removeTodo(todoId) {
      console.log(todoId)
      this.$store.commit('deleteTodo', todoId)
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
    grid-gap: 0.5rem;

    &__star {
      grid-row: 1;
      font-size: 2rem;
      text-align: right;
      padding-right: 5px;
    }

    &__list {
      grid-row: 2;
      overflow: hidden;
      // overflow: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      &__todo {
        display: flex;
        height: 32px;
        &__time {
          flex-basis: 80px;
          line-height: 32px;
        }
        &__text {
          flex: 1;
          margin: 0 10px;
          text-align: left;
          line-height: 32px;
          padding-left: 10px;
        }
        &__remove {
          flex-basis: 40px;
          font-size: 2rem;
          line-height: 32px;
          background: white;
          border: 0;
          color: gray;
          &:hover {
            color: lightgray;
          }
        }
      }
      &__todo_over {
        color: red;
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
        height: 40px;
        color: white;
        border-radius: 4px;
        border: 0;
        background: #4BA9FF;
        &:hover {
          background: #6BC9FF;
        }
      }
    }
  }
</style>