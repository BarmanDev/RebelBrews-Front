<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import CardBeerComponent from '../components/CardBeerComponent.vue';
import type { Beer } from '@/types/Beer'; 

const beers = ref<Beer[]>([]);
const currentPage = ref(1);
const totalPages = ref(10); 

const fetchBeers = async (page: number) => {
 try {
      const response = await axios.get<Beer[]>(`https://api.punkapi.com/v2/beers?page=${page}&per_page=20`);
      beers.value = response.data;
 } catch (error) {
      console.error('Error fetching beer data:', error);
 }
};

onMounted(() => {
  fetchBeers(currentPage.value);
});

const nextPage = () => {
 if (currentPage.value < totalPages.value) {
    currentPage.value++;
    fetchBeers(currentPage.value);
 }
};

const prevPage = () => {
 if (currentPage.value > 1) {
    currentPage.value--;
    fetchBeers(currentPage.value);
 }
};
</script>

<template>
   <h1>Beeeeers</h1>
   <div class="beers-container">
     <CardBeerComponent v-for="beer in beers" :key="beer.id" :beer="beer" />
   </div>
   <div class="pagination">
     <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
     <span>Página {{ currentPage }} de {{ totalPages }}</span>
     <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
   </div>
  </template>

<style scoped lang="scss">
.beers-container {
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
 grid-gap: 20px;
 padding: 20px;
}

.pagination {
 display: flex;
 justify-content: center;
 margin-top: 20px;
}

.pagination button {
 margin: 0 10px;
 padding: 10px 20px;
 background-color: #007bff;
 color: white;
 border: none;
 border-radius: 5px;
 cursor: pointer;
 transition: background-color 0.3s ease;

 &:hover {
    background-color: #0056b3;
 }

 &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
 }
}
</style>
