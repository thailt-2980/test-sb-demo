<template>
    <v-app>
        <v-navigation-drawer app :rail="collapsed">
            <v-list-item prepend-icon="mdi-all-inclusive" title="My App" />

            <template #append>
                <v-list>
                    <v-list-item
                        :prepend-icon="`mdi-chevron-double-${collapsed ? 'right' : 'left'}`"
                        title="Collapse sidebar"
                        @click="toggleSidebar"
                    />
                </v-list>
            </template>
        </v-navigation-drawer>

        <v-main>
            <v-container fluid class="min-h-full bg-gray-100">
                <slot />
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
    import { ref, defineComponent } from 'vue';

    const collapsed = ref(true);

    function toggleSidebar() {
        collapsed.value = !collapsed.value;
    }

    defineComponent({
        name: 'DefaultLayout',
    });
</script>
