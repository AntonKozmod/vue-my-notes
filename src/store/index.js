import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: localStorage.todos ? JSON.parse(localStorage.todos) : [{ id: 0, text: 'head', time: '', week: '' }]
  },
  getters: {
    getTodos: state => {
      return state.todos.slice(1)
    },
    getTodosWeek: state => week => state.todos.filter(item => item.week === week)
  },
  mutations: {
    addTodo: function(state, newTodo) {
      state.todos.push({
        id: state.todos.slice(-1)[0].id + 1,
        text: newTodo.text,
        time: newTodo.time,
        week: newTodo.week
      })
      console.log(state.todos)
      localStorage.todos = JSON.stringify(state.todos)
    },
    deleteTodo(state, todoId) {
      let todoIndex = state.todos.indexOf(
				state.todos.find(todo => todo.id === todoId)
			)
			state.todos.splice(todoIndex, 1)
      localStorage.todos = JSON.stringify(state.todos)
    }
  },
  actions: {
  },
  modules: {
  }
})
