<template>
   <div>
      <input type="text" v-model="searchBeer" placeholder="Busca tu cerveza" @input="searchBeers" />
      <input type="number" step="0.1" v-model="searchAbv" placeholder="Busca por graduación" @change="searchAbvInput" />
      <input type="number" v-model="searchIbu" placeholder="Busca por amargor" @change="searchIbuInput" />
      <button @click="resetSearch">Volver</button> <!-- Botón para restablecer la búsqueda -->
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchBeer = ref('');
const searchAbv = ref('');
const searchIbu = ref('');
const emit = defineEmits(['search', 'reset', 'searchAbv', 'searchIbu']);

const searchBeers = () => {
   emit('search', searchBeer.value);
};

const searchAbvInput = () => {
   emit('searchAbv', searchAbv.value);
};

const searchIbuInput = () => {
   emit('searchIbu', searchIbu.value);
};

const resetSearch = () => {
   emit('reset');
};
</script>