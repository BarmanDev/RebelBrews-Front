<template>
    <div class="title">
    <h1>LOS LOCALES MÁS REBELDES </h1>
</div>
    <div class="business-cards-container">
        <BusinessCard v-for="business in businesses" :key="business.id" :business="business" />
    </div>
    <button @click="openAddBusinessModal" class="add-business-button">Añadir Nuevo Local</button>
    <div v-if="showAddBusinessModal" class="add-business-modal">
        <div class="add-business-modal-content">
            <h2>Añadir Nuevo Local</h2>
            <input v-model="newBusiness.name" placeholder="Nombre" />
            <input v-model="newBusiness.address" placeholder="Dirección" />
            <input v-model="newBusiness.phone" placeholder="Teléfono" />
            <input v-model="newBusiness.city" placeholder="Ciudad" />
            <input type="file" @change="onFileChange" />
            <button @click="addNewBusiness">Añadir Local</button>
            <button @click="closeAddBusinessModal">Cancelar</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import BusinessCard from '../components/CardBusinessComponent.vue';

const businesses = ref([]);
const showAddBusinessModal = ref(false);
const newBusiness = ref({
    name: '',
    address: '',
    phone: '',
    city: '',
    image: '', 
});

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/v1/businesses');
        businesses.value = response.data;
    } catch (error) {
        console.error('Error loading businesses:', error);
    }
});

const openAddBusinessModal = () => {
    showAddBusinessModal.value = true;
};

const closeAddBusinessModal = () => {
    showAddBusinessModal.value = false;
};

const onFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
        newBusiness.value.image = reader.result;
    };
    reader.readAsDataURL(file);
};

const addNewBusiness = async () => {
    try {
        await axios.post('http://localhost:8080/api/v1/businesses', newBusiness.value);
        console.log('Nuevo negocio añadido:', newBusiness.value.name);
        location.reload();
    } catch (error) {
        console.error('Error al añadir el nuevo negocio:', error);
    }
};
</script>

<style scoped lang="scss">

.title{
    margin: 2rem;
    text-align: center;
}

.add-business-button{
    margin: 2rem;
    background-color: #F7BE37;
    color: #000;
    border: none;
    border-radius: 5px;
    padding: 5px 10px; 
    font-size: 12px;
    cursor: pointer;
}

.add-business-button:hover{
    background-color: #262425;
    color: aliceblue;
}

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

.add-business-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.add-business-modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    max-width: 800px;
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