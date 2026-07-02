<script setup>
// Import the application components
import Navbar from "./components/Navbar.vue";
// Import the Track player logic module
import usePlayer from "./composables/usePlayer.js"
// Import the global application CSS styles
import "./styles/global.css";
// Import the App component CSS styles
import "./styles/App.css";
</script>

<template>
  <div class="app-shell">
    <Navbar />
    <main class="app-main">
        <RouterView />
    </main>
  </div>
</template>
