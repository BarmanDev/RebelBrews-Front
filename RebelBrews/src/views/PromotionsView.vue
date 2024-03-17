<template>
    <div class="promotion-title">
       <h1>GANA CON REBEL BREWS</h1>
       <p class="promotion-text">¿Quieres vacaciones con RebelBreews? Regístrate y entrarás en el concurso de un viaje para dos personas y podrás conocer los locales más top de EEUU con una cata marinage en el local que tu decidas de la lista.</p>
    </div>
    <div class="breweries-container">
       <LocalCardComponent v-for="brewery in breweries" :key="brewery.id" :brewery="brewery" />
    </div>
 </template>
    
    <script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import LocalCardComponent from '@/components/CardLocalComponet.vue'; //
    const breweries = ref([]);
    
    const fetchBreweries = async () => {
     try {
        const response = await axios.get('https://api.openbrewerydb.org/breweries?per_page=10');
        breweries.value = response.data;
     } catch (error) {
        console.error('Error fetching breweries:', error);
     }
    };
    
    onMounted(() => {
     fetchBreweries();
    });
    </script>
    
    <style scoped lang="scss">
    .breweries-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 20px;
        padding: 20px;
        justify-content: center;
        margin-right: 2rem;

    }
    
    .local-card {
        border: 1px solid #ccc;
        padding: 20px;
        text-align: center;
        position: relative;
        transition: box-shadow 0.3s ease; 
        border-radius: 20px;
        width: 100%;
        min-height: 350px;
    }
    
    .promotion-title {
       margin-top: 2rem;
        text-align: center;
        margin-bottom: 20px;
    }
    
    .promotion-title h1 {
        font-size: 2rem;
        margin-bottom: 10px;
    }
    
    .promotion-text {
        font-size: 1.2rem;
        color: #333;
        margin-top: 10px;
        text-align: center;
    }
    
    .local-card:hover {
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    
    @media (max-width: 768px) {
        .breweries-container {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
        .promotion-title h1 {
            font-size: 1.5rem;
        }
        .promotion-text {
            font-size: 1rem;
        }
    }
    
    @media (max-width: 480px) {
        .breweries-container {
            grid-template-columns: 1fr;
            margin-left: 4rem;
        }
        .promotion-title h1 {
            font-size: 1.2rem;
        }
        .promotion-text {
            font-size: 0.9rem;
        }
    }
    </style>