<template>
  <div id="layout">
    <nav>
      <router-link to="/">
        <button>Rover</button>
      </router-link>
      <router-link to="/mission-control">
        <button>Mission Control</button>
      </router-link>
    </nav>
    <router-view></router-view>
    <footer>
      Made with ❤️ and 🤖 by Mathieu, Anaël, Logan and Théo (MALTdev)
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
