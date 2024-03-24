// src/stores/authStore.ts

import { defineStore } from "pinia";
import { reactive } from "vue";

export interface ILoggedInUser {
 username: string;
 role: string;
 isAuthenticated: boolean;
}

export const useAuthStore = defineStore('auth', () => {
 const state = reactive<ILoggedInUser>({
    username: '',
    role: '',
    isAuthenticated: false,
 });

 return {
    ...state,
    login(user: ILoggedInUser) {
      state.username = user.username;
      state.role = user.role;
      state.isAuthenticated = true;
    },
    logout() {
      state.username = '';
      state.role = '';
      state.isAuthenticated = false;
    },
 };
});