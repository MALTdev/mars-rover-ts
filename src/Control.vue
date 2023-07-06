<script setup lang="ts">
import { ref } from "vue";
import { useControl } from "./useControl.ts";

const { emit } = useControl()

const sequence = ref("")

const sendCommand = (command: string) => {
  emit("command", command)
}

const sendSequence = () => {
  emit("sequence", sequence.value)
  sequence.value = ""
}
</script>

<template>
  <div id="control">
    <h1>Mission Control</h1>

    <p>Commands</p>
    <div id="commands">
      <button id="A" @click="sendCommand('A')">A</button>
      <button id="G" @click="sendCommand('G')">G</button>
      <button id="R" @click="sendCommand('R')">R</button>
      <button id="D" @click="sendCommand('D')">D</button>
    </div>

    <p>Sequence</p>
    <div>
      <input v-model="sequence" type="text" placeholder="Enter sequence..." />
      <button @click="sendSequence">send</button>
    </div>
  </div>
</template>

<style scoped>
#control {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#commands {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    ". A ."
    "G . D"
    ". R .";
}

#commands button#A {
  grid-area: A;
}

#commands button#G {
  grid-area: G;
}

#commands button#D {
  grid-area: D;
}

#commands button#R {
  grid-area: R;
}
</style>
