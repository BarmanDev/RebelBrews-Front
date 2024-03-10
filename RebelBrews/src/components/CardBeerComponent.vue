<template>
    <div class="beer-card">
        <div class="info-buttons">
            <button @click="toggleTooltip" class="info-button">Info</button>
            <button @click="addToFavorites" class="favorite-button">Favorito</button>
        </div>
        <div class="img-beer">
            <img :src="beer?.image_url" alt="Beer Image" v-if="beer?.image_url" />
        </div>
        <div class="title-beer">
            <h2>{{ beer?.name }}</h2>
            <p class="beer-description">{{ truncateDescription(beer?.description, 150) }}</p>
        </div>
        <div v-if="showTooltip" class="tooltip">
            <p>Graduación: {{ beer?.abv }}%</p>
            <p>Amargor: {{ beer?.ibu }} IBU</p>
            <p>Ingredientes de Malta: {{ beer?.ingredients.malt.map(malt => malt.name).join(', ') }}</p> 
            <p>Ingredientes de Lúpulo: {{ beer?.ingredients.hops.map(hop => hop.name).join(', ') }}</p> 
            <p>Levadura: {{ beer?.ingredients.yeast }}</p> 
        </div>

    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps({
    beer: Object
});

const showTooltip = ref(false);

const truncateDescription = (description: string, maxLength: number) => {
    return description.length > maxLength ? description.slice(0, maxLength) + '...' : description;
};

const toggleTooltip = () => {
    showTooltip.value = !showTooltip.value;
};

const addToFavorites = () => {
    console.log('Agregar a favoritos:', beer.value.name);
};
</script>

<style scoped lang="scss">
@import '../assets/cardbeer.scss';

</style>