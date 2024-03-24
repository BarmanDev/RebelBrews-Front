<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';
import router from '@/router/index';

const username = ref('');
const email = ref('');
const password = ref('');
const repeatPassword = ref('');
const isSubmitting = ref(false);

const authStore = useAuthStore();

const register = async () => {
 if (password.value !== repeatPassword.value) {
    alert('Las contraseñas no coinciden');
    return;
 }

 isSubmitting.value = true;
 try {
    const response = await axios.post('http://localhost:8080/api/v1/register', {
      username: username.value,
      email: email.value,
      password: password.value,
    });

    console.log(response.data);
    authStore.login({
      username: response.data.username,
      role: response.data.role,
      isAuthenticated: true,
    });

    let redirectPath = '/';
    if (authStore.role === 'ROLE_ADMIN') {
      redirectPath = '/admin';
    } else if (authStore.role === 'ROLE_USER') {
      redirectPath = '/list';
    }
    router.push(redirectPath);
 } catch (error) {
    console.error('Error:', error);
 } finally {
    isSubmitting.value = false;
 }
};
</script>

<template>
 <div class="image-container">
     <img class="logo" src="../assets/img/logo.png" alt="logo empresa super guay">
 </div>
 <div class="form-login">
     <h1 class="login-title">REGISTRARSE</h1>
     <form @submit.prevent="register">
       <input v-model="username" placeholder="Nombre de usuario" required />
       <input v-model="email" type="email" placeholder="Email" required />
       <input v-model="password" type="password" placeholder="Password" required />
       <input v-model="repeatPassword" type="password" placeholder="Repetir Password" required />
       <p class="register-link">
         ¿Ya tienes cuenta? <router-link to="/login">Iniciar sesión aquí</router-link>
       </p>
       <button type="submit">Registrarse</button>
     </form>
 </div>
</template>

<style scoped lang="scss">
.login-title {
 text-align: center;
}

.image-container {
 display: flex;
 justify-content: center;
 align-items: center;
}

.image-container img {
 width: 12rem;
}

.form-login {
 display: flex;
 flex-direction: column;
 gap: 40px;
 padding: 20px;
 border-radius: 5px;
 background-color: #fff;
 width: 700px;
 margin: 0 auto;
}

.form-login input {
 padding: 10px;
 border: 1px solid #ccc;
 border-radius: 5px;
 margin-bottom: 20px;
 display: block; 
 width: 100%;
}

.form-login button {
 background-color: #262425;
 color: aliceblue;
 border-radius: 10px;
 transition: transform 0.3s ease-in-out;
 padding: 0.5rem 2rem;
 margin: 2rem auto; 
 width: auto; 
}

.form-login button:hover {
 background-color: #F7BE37;
 color: #000;
 transform: scale(1.05);
}

.register-link a {
 color: inherit;
 text-decoration: none;
 font-weight: bold;
}

.register-link a:hover {
 color: #F7BE37;
 transform: scale(1.05);
}
</style>