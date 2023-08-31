<template>
  <div>
    <ul>
      <TaskItem :taskProps="task1" :taskDescProps="task2" />
      <!-- ... Weitere TaskItems ... -->
    </ul>
  </div>
</template>

<script setup lang="ts">
import TaskItem from "@/components/TaskItem.vue"; // Stelle den Pfad zur TaskItem-Komponente richtig ein
import { ref } from "vue"; // Importiere Vue ref

const task1 = ref({
  text: "Task 1 Text",
  done: false
});

const task2 = ref({
  text: "Task 2 Text",
  done: true
});
</script>
