<template>
    <div class="beers-container">
        <div class="filterBeers">
            <FilterBeerComponent @search="handleSearch" @reset="resetSearch" @searchAbv="handleSearchAbv" @searchCountry="handleSearchCountry" />
        </div>
        <div class="titleBeers">
            <h1>LAS CERVEZAS MÁS REBELDES</h1>
        </div>
        <div class="beer-cards-container">
            <CardBeerComponent v-for="beer in filteredBeers" :key="beer.id" :beer="beer" />
        </div>
        <div class="pagination">
            <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
            <span>Página {{ currentPage }} de {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import CardBeerComponent from '../components/CardBeerComponent.vue';
    import FilterBeerComponent from '@/components/FilterBeerComponent.vue';
    import { Beer } from '@/types/Beer';

    const allBeers = ref<Beer[]>([]);
    const currentPage = ref(1);
    const totalPages = ref(1);
    const filteredBeers = ref<Beer[]>([]);

    const fetchBeers = async () => {
        try {
            const response = await fetch('../../public/data/beers.json');
            const beers = await response.json();
            allBeers.value = beers;
            calculateTotalPages();
            updateFilteredBeers();
        } catch (error) {
            console.error('Error fetching beer data:', error);
        }
    };

    const calculateTotalPages = () => {
        const beersPerPage = 10;
        totalPages.value = Math.ceil(allBeers.value.length / beersPerPage);
    };

    const updateFilteredBeers = () => {
        const startIndex = (currentPage.value - 1) * 10;
        const endIndex = startIndex + 10;
        filteredBeers.value = allBeers.value.slice(startIndex, endIndex);
    };

    const handleSearch = (searchTerm: string) => {
        filteredBeers.value = allBeers.value.filter(beer =>
            beer.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        calculateTotalPages();
    };

    const handleSearchAbv = (abv: number) => {
        filteredBeers.value = allBeers.value.filter(beer =>
            beer.abv === abv
        );
        calculateTotalPages();
    };

    const handleSearchCountry = (country: string) => {
        if (country) {
            filteredBeers.value = allBeers.value.filter(beer =>
                beer.origin.toLowerCase() === country.toLowerCase()
            );
        } else {
            resetSearch();
        }
        calculateTotalPages();
    };

    const resetSearch = () => {
        filteredBeers.value = allBeers.value;
        calculateTotalPages();
    };

    const nextPage = () => {
        if (currentPage.value < totalPages.value) {
            currentPage.value++;
            updateFilteredBeers();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const prevPage = () => {
        if (currentPage.value > 1) {
            currentPage.value--;
            updateFilteredBeers();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    onMounted(() => {
        fetchBeers();
    });
</script>

<style scoped lang="scss">
    .filterBeers{
        margin: 2rem 0;
    }

    .titleBeers{
        margin: 1rem 0;
        text-align: center;
    }

    .beer-cards-container {
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