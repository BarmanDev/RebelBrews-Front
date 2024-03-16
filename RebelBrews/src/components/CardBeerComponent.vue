<template>
    <div class="beer-card">
        <div class="info-buttons">
            <button @click="toggleTooltip" class="info-button">Info</button>
            <button @click="addToFavorites" class="favorite-button">Favorito</button>
        </div>
        <div class="title-beer">
            <h2>{{ brewery.name }}</h2>
            <p>{{ brewery.brewery_type }}</p>
            <p>{{ brewery.street }}</p>
            <p>{{ brewery.city }}, {{ brewery.state }} {{ brewery.postal_code }}</p>
            <p>{{ brewery.country }}</p>
            <p><a :href="brewery.website_url" target="_blank">Visitar sitio web</a></p>
        </div>
        <div v-if="showTooltip" class="tooltip">
            <p>Teléfono: {{ brewery.phone }}</p>
            <p>Latitud: {{ brewery.latitude }}</p>
            <p>Longitud: {{ brewery.longitude }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps({
    brewery: Object
});

const showTooltip = ref(false);

const toggleTooltip = () => {
    showTooltip.value = !showTooltip.value;
};

const addToFavorites = () => {
    console.log('Agregar a favoritos:', brewery.value.name);
};
</script>

<style scoped lang="scss">
@import '../assets/cardbeer.scss';
</style>