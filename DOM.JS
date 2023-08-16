<template>
  <div class="container mx-auto mt-8 px-4">
    <h1 class="text-2xl font-semibold mb-4">Todo List</h1>
    <form @submit.prevent="addTodo" class="mb-4">
      <input v-model="newTodo" class="p-2 border rounded w-full" placeholder="Enter a new todo...">
      <button type="submit" class="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Add Todo</button>
    </form>
    <ul class="space-y-2">
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <button @click="removeTodo(todo)" class="ml-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded">X</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// give each todo a unique id
let id = 0

const newTodo = ref('')
const todos = ref([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
])

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
