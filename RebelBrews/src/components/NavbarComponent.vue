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
        <router-link id="btn-start" to="/login">Comienza</router-link>
        <img class="navbar-icon" src="../assets/icons/logout.svg" alt="Menu" aria-label="Toggle menu" @click="userLogout">
      </div>
      <img class="navbar-icon" src="../assets/icons/menu-icon.svg" alt="Menu" aria-label="Toggle menu" @click="toggleMenu">
  </nav>
  </template>
 
 <script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';

const router = useRouter();
const isMenuOpen = ref(false);
const authStore = useAuthStore(); 

const toggleMenu = () => {
 isMenuOpen.value = !isMenuOpen.value;
}

const userLogout = async () => {
    try {
      await axios.get('http://localhost:8080/api/v1/logout', {
        withCredentials: true
      });
    } catch (error) {
      console.error('Ha ocurrido un error durante el logout: ', error);
    }
  }


</script>
 
 <style scoped lang="scss">
     @import '../assets/navbar.scss'
 </style>