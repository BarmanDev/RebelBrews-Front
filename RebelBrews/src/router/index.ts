import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AdminView from '../views/AdminView.vue';
import RegisterView from '../views/RegisterView.vue';
import LoginView from '../views/LoginView.vue';
import BeersView from '../views/BeersView.vue';
import UserView from '../views/UserView.vue';
import LocalView from '../views/LocalView.vue';
import PromotionsView from '../views/PromotionsView.vue';

const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
 routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/beers',
      name: 'beers',
      component: BeersView
    },
    {
      path: '/user',
      name: 'user',
      component: UserView
    },
    {
      path: '/locales',
      name: 'LocalView',
      component: LocalView
    },
    {
      path: '/promotions', 
      name: 'promotions',
      component: PromotionsView
    },
 ]
});

export default router;