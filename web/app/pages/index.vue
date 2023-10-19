<template>
    <div>
        {{ auth.user ? `Hello ${auth.user.id}` : `Hello guest` }}
        sdfsdfsdfsfsd
        <p>Test</p>
    </div>
</template>

<script setup lang="ts">
    import { useAuthStore } from '~/store';

    const auth = useAuthStore();
</script>
