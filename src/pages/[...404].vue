<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute('/[...404]');
</script>

<template>
    <div class="text-center flex flex-col gap-4">
        <h1 class="font-bold text-9xl">404</h1>
        <p class="text-4xl italic">Not found {{ route.params[404] }}</p>
        <RouterLink to="/" class="underline text-xl">Go back</RouterLink>
    </div>
</template>