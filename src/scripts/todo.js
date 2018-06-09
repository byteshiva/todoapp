export default {
  data: function () {
    return {
      todos: [{
        name: 'Read a book',
        done: true,
        edit: false
      },
      {
        name: 'Buy Grocery Items',
        done: false,
        edit: false
      },
      {
        name: 'Meet Michael and Rahim',
        done: false,
        edit: false
      },
      {
        name: 'Buy GPU',
        done: false,
        edit: false
      }
      ],
      workingName: '',
      feedback: '',
      editedTodo: null
    }
  },
  methods: {
    add (e) {
      e.preventDefault()
      this.todos.push({
        name: this.workingName,
        done: false
      })
      this.feedback = `${this.workingName} added`
      this.workingName = ''
    },
    remove (index, name) {
      this.todos.splice(index, 1)
      // document.getElementById('todos-label').focus()
      this.feedback = `${name} deleted`
    },
    edit (index, todo) {
      this.beforeEdit = todo.name
      this.editedTodo = todo
      this.editedTodo.edit = true
      this.feedback = `${name} edited`
    },
    save (index, todo) {
      console.log('save execited')
      if (!this.editedTodo) {
        console.log('null executed')
        return
      }
      this.editedTodo.edit = false
      this.editedTodo = null
      todo.name = todo.name.trim()
      if (!todo.name) {
        this.remove(index, todo)
      }
      this.feedback = `${name} Saved`
    }
  },
  computed: {
    validity () {
      return this.workingName.trim() === ''
    }
  }
}
