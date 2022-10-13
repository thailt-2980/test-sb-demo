import { useAuthStore } from '~/store';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
    const auth = useAuthStore();

    Promise.all([auth.nuxtClientInit()]);
});
