import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [{ id: 0, text: 'head', datetime: '' }]
  },
  getters: {
    thisTodo: state => todoId => {
			return state.todos.find(todo => todo.id === todoId);
		}
  },
  mutations: {
    addTodo: function(state, newTodo) {
      state.todos.push({
        id: state.todos.slice(-1)[0].id + 1,
        text: newTodo.text,
        datetime: newTodo.datetime
      })
      console.log('state.todos', state.todos)
    },
    deleteTodo(state, todoId) {
      let todoIndex = state.todos.indexOf(
				store.getters.thisTodo(todoId)
			);
			state.todos.splice(todoIndex, 1);
			delete state.todos[todoIndex].text;
			console.log(state.todos[todoIndex]);
    }
  },
  actions: {
  },
  modules: {
  }
})
