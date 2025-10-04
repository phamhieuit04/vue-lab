<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import { Sun, Moon } from 'lucide-vue-next';

const mode = useColorMode();

function toggleTheme() {
    mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
    <Button @click="toggleTheme" class="cursor-pointer" variant="ghost">
        <Sun v-if="mode == 'dark'" />
        <Moon v-else />
    </Button>
</template>