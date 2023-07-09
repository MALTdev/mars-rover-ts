<script setup lang="ts">
import { computed } from "vue";
import { useRover } from "../composables/useRover.ts";

const { rover, planet, isObstacle, isFound } = useRover();

withDefaults(
  defineProps<{
    showAll: boolean;
  }>(),
  {
    showAll: false,
  }
);

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
  <table id="planet">
    <tbody>
      <tr v-for="i in latitudes">
        <td v-for="j in longitudes">
          <template v-if="rover && i === roverLatitude && j === roverLongitude">
            <div id="robot">🤖</div>
          </template>
          <template v-else-if="showAll && isObstacle(i, j) || isFound(i, j)">
            <div class="obstacle">🪨</div>
          </template>
          <template v-else>
            <div class="ground">&nbsp;</div>
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
#planet td {
  width: 30px;
  height: 30px;
  border: 1px solid #fff;
  text-align: center;
}

#robot {
  transform: rotate(v-bind(rover.Orientation.toDegree() + "deg"));
}
</style>
