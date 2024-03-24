<template>
    <h1>LOCALES QUE SE VAN A VER </h1>
    <div class="business-cards-container">
        <BusinessCard v-for="business in businesses" :key="business.id" :business="business" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import BusinessCard from '../components/CardBusinessComponent.vue';

const businesses = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get('../../public/data/bussiness.json');
        businesses.value = response.data;
    } catch (error) {
        console.error('Error loading businesses:', error);
    }
});
</script>

<style scoped lang="scss">
.business-cards-container {
    display: grid;
    grid-gap: 20px;

    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1400px) {
        grid-template-columns: repeat(5, 1fr);
    }
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