<template>
  <NuxtLayout name="main">
    <template #addTaskForm><AddTask @add-todo="addTodo" /></template>
    <template #heading><span>Tasks to-do</span></template>
    <Task
      v-for="todo in todos || []"
      :key="todo.text"
      :taskProps="todo"
      @update-todos="updateTodos"
    />
    <Task
      v-for="todoD in todosDesc || []"
      :key="todoD.text"
      :taskProps="todosDesc"
    />
    
    <p v-if="showMessage" class="no-tasks">No tasks todo!</p>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useTodoStore } from "~~/store/todo";

onBeforeMount(() => changeShowMessage());

const store = useTodoStore();
const todos = ref(store.getTasksTodo);
const todosDesc = ref(store.getTasksDescTodo);

const addTodo = ({ text, desc, done, doneDesc }) => {
  store.addTaskInStore(text, desc, done, doneDesc);
  updateTodos();
};

const showMessage = ref(false);

const changeShowMessage = () =>
  (showMessage.value = todos.value.length ? false : true);

const updateTodos = () => {
  todos.value = store.getTasksTodo;
  changeShowMessage();
  store.updateTasksInLocalStorage();
};
const updateTodosDesc = () => {
  todosDesc.value = store.getTasksDescTodo;
  changeShowMessage();
  store.updateTasksInLocalStorage();
};
</script>