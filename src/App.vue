<script setup lang="ts">
import { onMounted } from "vue";
import { useRover } from "./useRover.ts";

const { executeCommand } = useRover()

onMounted(() => {
  document.addEventListener("keydown", (ev: KeyboardEvent) => {
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
  });
});
</script>

<template>
  <div id="layout">
    <nav>
      <router-link to="/">
        <button>Rover</button>
      </router-link>
      <router-link to="/control">
        <button>Mission Control</button>
      </router-link>
    </nav>
    <router-view></router-view>
    <footer>
      Made with ❤️ and 🤖 by Mathieu NEYRET, Anaël BONNAFOUS, Logan LE SAUX and
      Théo NICOLAS
    </footer>
  </div>
</template>

<style scoped>
#layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

#layout nav {
  display: flex;
  gap: 1em;
}
</style>
