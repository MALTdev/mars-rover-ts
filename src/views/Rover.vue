<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useRover } from "../composables/useRover.ts";
import RoverMap from "../components/RoverMap.vue";

const { executeCommand } = useRover();

onMounted(() => {
  document.addEventListener("keydown", keydownHandler);
});

onUnmounted(() => {
  document.removeEventListener("keydown", keydownHandler);
});

const keydownHandler = (ev: KeyboardEvent) => {
  switch (ev.key) {
    case "z":
    case "ArrowUp":
      executeCommand("A");
      break;
    case "q":
    case "ArrowLeft":
      executeCommand("G");
      break;
    case "s":
    case "ArrowDown":
      executeCommand("R");
      break;
    case "d":
    case "ArrowRight":
      executeCommand("D");
      break;
    default:
      break;
  }
};
</script>

<template>
  <div id="game">
    <h1>Opération MALT69775643</h1>

    <RoverMap :show-all="true" />

    <span id="message">
      Atterissage : succès le 05 Juillet 2023 à 12h27 heure FR
    </span>
  </div>
</template>

<style scoped>
#game {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#message {
  margin-top: 1em;
  font-style: italic;
}
</style>
