<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

</script>

<template>
 <nav class="navbar">
    <div class="navbar-logo">
      <img src="../assets/img/logo.png" alt="Icono">
    </div>
    <div class="navbar-links" v-show="isMenuOpen">
      <a href="#comentarios">Promociones</a>
      <a href="#empresa">Cervezas</a>
      <a href="#locales">Locales</a>
      <a href="#cerveza">Empresa</a>
      <a id="btn-start" href="#promociones">Comienza</a>
    </div>
    <img class="navbar-icon" src="../assets/icons/menu-icon.svg" alt="Menu" aria-label="Toggle menu" @click="toggleMenu">
 </nav>
</template>

<style scoped lang="scss">
    @import '../assets/navbar.scss'

</style>