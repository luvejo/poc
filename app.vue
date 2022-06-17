<script setup lang="ts">
import { useInfiniteScroll } from "@vueuse/core";

const el = ref<HTMLElement>(null);
const data = ref([1, 2, 3, 4, 5, 6]);

useInfiniteScroll(
  el,
  () => {
    console.log("[*] loading more...");
    data.value.push(Math.floor(Math.random() * 100));
  },
  { distance: 10 }
);
</script>

<template>
  <div ref="el" class="container">
    <div v-for="item in data">
      {{ item }}
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 1rem;
  border-radius: 0.25rem;
  gap: 0.5rem;
  width: 300px;
  height: 300px;
}
</style>
