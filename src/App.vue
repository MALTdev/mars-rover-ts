<template>
    <div id="layout">
        <nav>
            <router-link to="/">
                <button>Rover</button>
            </router-link>
            <router-link to="/console">
                <button>Console</button>
            </router-link>
        </nav>
        <router-view></router-view>
        <footer>
            Made with ❤️ and 🤖 by Mathieu NEYRET, Anaël BONNAFOUS, Logan LE SAUX and Théo NICOLAS
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
