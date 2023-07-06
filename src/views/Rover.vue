<script setup lang="ts">
import RoverMap from "../components/RoverMap.vue";
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
