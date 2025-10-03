<script setup lang="ts">
const route = useRoute('/messages/[id]');
</script>

<template>
    <h1>Message {{ route.params['id'] }}</h1>
</template>