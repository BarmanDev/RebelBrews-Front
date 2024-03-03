<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import CardBeerComponent from '../components/CardBeerComponent.vue';

const beers = ref([]);
const currentPage = ref(1);
const totalPages = ref(0);

const fetchBeers = async (page) => {
 try {
    const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=12`);
    beers.value = response.data.filter(beer => beer.image_url);
    // Verificar si estamos en la última página
    if (response.data.length < 12) {
      // Si no hay 12 cervezas, estamos en la última página
      totalPages.value = page;
    } else {
      // Si hay 12 cervezas, calculamos el total de páginas
      totalPages.value = Math.ceil(response.data.length / 12);
    }
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
   <button @click="prevPage" :disabled="currentPage.value === 1">Anterior</button>
   <span>Página {{ currentPage.value }} de {{ totalPages.value }}</span>
   <button @click="nextPage" :disabled="currentPage.value === totalPages.value">Siguiente</button>
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