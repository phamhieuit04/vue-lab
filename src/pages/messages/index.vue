<script setup lang="ts">
definePage({
    'meta': {
        title: 'Messages'
    }
});
</script>

<template>
    <ul>
        <li v-for="i in 100" class="hover:underline my-2">
            <RouterLink :to="`/messages/${i}`">Message {{ i }}</RouterLink>
        </li>
    </ul>
</template>