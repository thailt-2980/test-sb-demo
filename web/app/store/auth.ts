import { defineStore } from 'pinia';
import ky from '~/libs/ky';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as User | null,
    }),

    actions: {
        async nuxtClientInit() {
            const response = await ky.get('/api/web-init').then(({ data }) => data);
            this.user = response.user;
        },
    },
});

interface User {
    id: string,
}
