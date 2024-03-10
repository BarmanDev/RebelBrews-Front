<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

</script>

<template>
  <!-- <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header> -->
  <NavbarComponent/>
  <RouterView />
  <FooterComponent/>
</template>

<style scoped>
</style>
