<template>
  <NuxtLayout name="main">
    <template #addTaskForm><AddTask @add-done-task="addDoneTask" /></template>
    <template #heading><span>Done tasks</span></template>
    <Task
      v-for="task in doneTasks || []"
      :key="task.text"
      :taskProps="task"
      @update-done-tasks="addTodo"
    />
    
    <p v-if="showMessage" class="no-tasks">No done tasks!</p>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useTodoStore } from "~~/store/todo";
onBeforeMount(() => changeShowMessage());

const store = useTodoStore();
const doneTasks = ref(store.getDoneTasks);

const addTodo = ({ text, desc, done, doneDesc }) => {
  store.addTaskInStore(text, desc, done, doneDesc);
  updateDoneTasks();
};

const showMessage = ref(false);

const changeShowMessage = () =>
  (showMessage.value = doneTasks.value.length ? false : true);

const updateDoneTasks = () => {
  doneTasks.value = store.getDoneTasks;
  changeShowMessage();
  store.updateTasksInLocalStorage();
};
</script>

