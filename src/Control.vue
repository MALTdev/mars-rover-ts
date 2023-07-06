<script setup lang="ts">
import { ref } from "vue";
import { useControl } from "./useControl.ts";

const { emit } = useControl()

const sequence = ref("")

const startEmit = () => {
  emit("sequence", sequence.value)
  sequence.value = ""
}
</script>

<template>
  <div id="control">
    <h1>Mission Control</h1>
    <input v-model="sequence" type="text" />
    <button @click="startEmit">emit</button>
  </div>
</template>

<style scoped>
#control {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#control button {
  margin-top: 1em;
}
</style>
