<script setup lang="ts">
import { computed, onMounted } from "vue";

import { useRover } from "./useRover.ts";

const { rover, planet, executeCommand, isObstacle } = useRover();

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

const latitudes = Array.from(
  Array(planet.value?._decorated._pointMax._latitude._valeur),
  (_, index) => index
)
  .slice()
  .reverse();

const longitudes = Array.from(
  Array(planet.value?._decorated._pointMax._longitude._valeur),
  (_, index) => index
);

const roverLatitude = computed(
  () => rover.value?.Position._point._latitude._valeur
);

const roverLongitude = computed(
  () => rover.value?.Position._point._longitude._valeur
);
</script>

<template>
  <div id="game">
    <h1>Opération MALT69775643</h1>
    <table id="planet">
      <tbody>
        <tr v-for="i in latitudes">
          <td v-for="j in longitudes">
            <template
              v-if="rover && i === roverLatitude && j === roverLongitude"
            >
              <div id="robot">🤖</div>
            </template>
            <template v-else-if="isObstacle(i, j)">
              <div class="obstacle">🪨</div>
            </template>
            <template v-else>
              <div class="ground">&nbsp;</div>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
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

#planet td {
  width: 30px;
  height: 30px;
  border: 1px solid #fff;
  text-align: center;
}

#robot {
  transform: rotate(v-bind(rover.Orientation.toDegree() + "deg"));
}

#message {
  margin-top: 1em;
  font-style: italic;
}
</style>
