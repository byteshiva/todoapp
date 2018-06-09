<template>
<section id="component1" aria-labelledby="todos-label">
  <h4 id="additem" >ADD ITEM </h4>

  <form @submit="add">
        <label for="add" class="vh">
          Write a new todo item
        </label>
        <input type="text" id="add" v-model="workingName" placeholder="" :aria-invalid="validity">
        <button name="btn-add" type="submit" :disabled="validity">Add</button>
  </form>

  <h4 id="todos-label" tabindex="-1">TODO </h4>
  <ul>
    <li v-for="(todo, index) in todos" v-if="!todo.done" v-bind:key="index" >
      <input type="checkbox" :id="`todo-${index}`" v-model="todo.done"   class="vh" >
      <label :for="`todo-${index}`">
        <span class="tick"></span>
        <span class="text" v-show="!todo.edit">{{todo.name}}</span>
        <input type="text" v-model="todo.name" v-show="todo.edit">
      </label>
      <div>
            <div v-show="!todo.edit" :id="`todo-edit-${index}`" @click="edit(index, todo)" > Edit  <div class="divider"/>
            </div>
      </div>

      <div>
            <div v-show="todo.edit" :id="`todo-save-${index}`" @click="save(index, todo)" > Save
            <div class="divider"/> </div>
      </div>
      <div>
        <div :id="`todo-remove-${index}`" @click="remove(index, todo.name)" > Delete </div>
      </div>
    </li>
  </ul>
  <div class="empty-state">
  <p>Either you've done everything already or there are still things to add to your list. Add your first todo &#x2193;</p></div>
  <div role="status" class="vh">
    {{feedback}}
  </div>

  <h4 id="todos-label-completed" tabindex="-1">COMPLETED </h4>
  <ul>
    <li v-for="(todo, index) in todos" v-if="todo.done" v-bind:key="index">
            <!-- v-model="todo.done"  @click="updatemodel(index, todo.done)" -->
            <input type="checkbox" :id="`todo-${index}`" v-model="todo.done" class="vh">
            <label :for="`todo-${index}`">
              <span class="tick"></span>
              <span class="text" v-show="!todo.edit">{{todo.name}}</span>
              <input type="text" v-model="todo.name" v-show="todo.edit">
            </label>
            <div>
                  <div :id="`todo-edit-${index}`" v-show="!todo.edit" @click="edit(index, todo)" > Edit      <div class="divider"/>
                  </div>
            </div>
            <div>
                  <div :id="`todo-save-${index}`" v-show="todo.edit" @click="save(index, todo)" > Save
                  <div class="divider"/> </div>
            </div>
            <div>
              <div :id="`todo-remove-${index}`" @click="remove(index, todo.name)" > Delete </div>
            </div>
    </li>
  </ul>

</section>
</template>

<script language="text/javascript" src="../scripts/todo.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../css/main.css">
</style>
