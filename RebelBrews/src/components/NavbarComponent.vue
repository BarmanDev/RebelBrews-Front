<template>
  <nav class="navbar">
      <div class="navbar-logo">
        <router-link to="/">
          <img src="../assets/img/logo.png" alt="Icono">
        </router-link>
      </div>
      <div class="navbar-links" v-show="isMenuOpen">
        <router-link to="/promotions">Promociones</router-link>
        <router-link to="/beers">Cervezas</router-link>
        <router-link to="/locales" class="navbar-link">Locales</router-link>
        <router-link to="/cerveza">Empresas</router-link>
        <router-link id="btn-start" to="/register">Comienza</router-link>
      </div>
      <img class="navbar-icon" src="../assets/icons/menu-icon.svg" alt="Menu" aria-label="Toggle menu" @click="toggleMenu">
  </nav>
  </template>
 
 <script setup lang="ts">
 import { ref } from 'vue';
 
 const isMenuOpen = ref(false);
 
 const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
 }
 </script>
 
 <style scoped lang="scss">
     @import '../assets/navbar.scss'
 </style>