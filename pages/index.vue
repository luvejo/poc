<script setup lang="ts">
import { VueEternalLoading } from "@ts-pro/vue-eternal-loading";

const data = ref([1, 2, 3, 4, 5, 6]);

const onLoad = ({ loaded }) => {
  data.value.push(Math.floor(Math.random() * 100));
  loaded(4, 4);
};
</script>

<template>
  <div class="container">
    <div v-for="item in data">
      {{ item }}
    </div>
    <VueEternalLoading :load="onLoad" />
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
