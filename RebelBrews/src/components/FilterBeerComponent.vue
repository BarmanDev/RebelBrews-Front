<template>
   <div class="input-box">
    <div class="input-container">
       <input type="text" v-model="searchBeer" placeholder="Busca tu cerveza" @input="searchBeers" class="input-style" />
       <img src="../assets/icons/beers.svg" alt="Icono de Buscar" class="input-icon" />
    </div>
    <div class="input-container">
       <input type="number" step="0.1" v-model="searchAbv" placeholder="Busca por graduación" @change="searchAbvInput" class="input-style" />
       <img src="../assets/icons/OpenmojiDrunkPerson.svg" alt="Icono de Graduación" class="input-icon" />
    </div>
    <div class="input-container">
       <input type="text" v-model="searchCountry" placeholder="Busca por país" @change="searchCountryInput" class="input-style" />
       <img src="../assets/icons/globe.svg" alt="Icono de País" class="input-icon" />
    </div>
    <button @click="resetSearch" class="button-style">Volver</button>
   </div>
   </template>
   
   <script setup lang="ts">
   import { ref } from 'vue';
   
   const searchBeer = ref('');
   const searchAbv = ref('');
   const searchCountry = ref(''); // Nuevo ref para el país
   const emit = defineEmits(['search', 'reset', 'searchAbv', 'searchCountry']); // Añadido 'searchCountry'
   
   const searchBeers = () => {
      emit('search', searchBeer.value);
   };
   
   const searchAbvInput = () => {
      emit('searchAbv', searchAbv.value);
   };
   
   const searchCountryInput = () => { // Nueva función para el país
      emit('searchCountry', searchCountry.value);
   };
   
   const resetSearch = () => {
      emit('reset');
   };
   </script>
   
   <style scoped lang="scss">
   @import '../assets/filterbeer.scss';
   </style>