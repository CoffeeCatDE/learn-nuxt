<template>
  <Head><Title>Wishmanagement App by CoffeeCat</Title></Head>
  <NuxtPage />
</template>

<script lang="ts" setup>
import { useTodoStore } from "./store/todo";
useHead({
  link: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: true,
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap",
      rel: "stylesheet",
    },
    { rel: "icon", type: "image/png", href: "/favicon.png" },
  ],
});

onBeforeMount(() => useTodoStore().getTasksFromLocalStorage());
</script>

