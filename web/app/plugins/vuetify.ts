import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        components,
    });

    app.vueApp.use(vuetify);
});
