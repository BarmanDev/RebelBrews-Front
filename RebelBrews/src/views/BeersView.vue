<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import CardBeerComponent from '../components/CardBeerComponent.vue';
import FilterBeerComponent from '@/components/FilterBeerComponent.vue';
import type { Beer } from '@/types/Beer'; 

const allBeers = ref<Beer[]>([]); 
const currentPage = ref(1);
const totalPages = ref(10); 
const filteredBeers = ref<Beer[]>([]); 

const fetchBeers = async (page: number) => {
    try {
        const response = await axios.get<Beer[]>(`https://api.punkapi.com/v2/beers?page=${page}&per_page=12`);
        console.log(response.data); 
        const newBeers = response.data;
        allBeers.value = [...allBeers.value, ...newBeers];
        updateFilteredBeers(); 
    } catch (error) {
        console.error('Error fetching beer data:', error);
    }
};

onMounted(() => {
    fetchBeers(currentPage.value);
});

const updateFilteredBeers = () => {
    const startIndex = (currentPage.value - 1) * 12;
    const endIndex = startIndex + 12;
    filteredBeers.value = allBeers.value.slice(startIndex, endIndex);
};

const handleSearch = (searchTerm: string) => {
    filteredBeers.value = allBeers.value.filter(beer =>
        beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

const handleSearchAbv = (abv: number) => {
    filteredBeers.value = allBeers.value.filter(beer =>
        beer.abv === abv
    );
};

const handleSearchIbu = (ibu: number) => {
    filteredBeers.value = allBeers.value.filter(beer =>
        beer.ibu === ibu
    );
};

const resetSearch = () => {
    filteredBeers.value = allBeers.value; 
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
        fetchBeers(currentPage.value); 
        updateFilteredBeers(); 
        scrollToTop(); // Llama a scrollToTop
    }
};

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
        fetchBeers(currentPage.value); 
        updateFilteredBeers(); 
        scrollToTop(); // Llama a scrollToTop
    }
};
</script>

<template>
   <div class="filterBeers">
      <FilterBeerComponent @search="handleSearch" @reset="resetSearch" @searchAbv="handleSearchAbv" @searchIbu="handleSearchIbu" />
   </div>
   <div class="titleBeers">
      <h1>LAS CERVEZAS MÁS REBELDES</h1>
   </div>
   <div class="beers-container">
     <CardBeerComponent v-for="beer in filteredBeers" :key="beer.id" :beer="beer" />
   </div>
   <div class="pagination">
     <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
     <span>Página {{ currentPage }} de {{ totalPages }}</span>
     <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
   </div>
 </template>
 

<style scoped lang="scss">

.filterBeers{
   margin: 2rem 0;
}

.titleBeers{
   margin: 1rem 0;
   text-align: center;
}

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
   background-color: #262425;
   color: aliceblue;
   border-radius: 10px;
   transition: transform 0.3s ease-in-out;
   padding: 0.5rem 2rem;
   margin: 2rem;

 &:hover {
   background-color: #F7BE37; 
   color: #000; 
   transform: scale(1.05);
 }

 &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
 }
}
</style>