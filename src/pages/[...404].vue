<script setup lang="ts">
definePage({
    name: "404"
});

const route = useRoute('404');
</script>

<template>
    <div class="flex flex-col items-center justify-center gap-4 h-screen">
        <h1 class="font-bold text-9xl">404</h1>
        <p class="text-4xl italic">Not found {{ route.params[404] }}</p>
        <RouterLink to="/" class="underline text-xl">Go back</RouterLink>
    </div>
</template>