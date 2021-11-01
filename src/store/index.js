import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: localStorage.todos ? JSON.parse(localStorage.todos) : [{ id: 0, text: 'head', datetime: '' }]
  },
  getters: {
    thisTodo: state => todoId => {
			return state.todos.find(todo => todo.id === todoId);
		},
    getTodos: state => {
      return state.todos.slice(1)
    }
  },
  mutations: {
    addTodo: function(state, newTodo) {
      state.todos.push({
        id: state.todos.slice(-1)[0].id + 1,
        text: newTodo.text,
        datetime: newTodo.datetime
      })
      localStorage.todos = JSON.stringify(state.todos)
    },
    deleteTodo(state, todoId) {
      let todoIndex = state.todos.indexOf(
				store.getters.thisTodo(todoId)
			);
			state.todos.splice(todoIndex, 1);
			delete state.todos[todoIndex].text;
      localStorage.todos = JSON.stringify(state.todos)
    }
  },
  actions: {
  },
  modules: {
  }
})
