<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute('/about');
</script>

<template>
    <h1>{{ route.name }}</h1>
</template>