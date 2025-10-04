<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import { Sun, Moon } from 'lucide-vue-next';

const mode = useColorMode();
const isDark = ref(false);
function toogleTheme() {
    isDark.value = !isDark.value;
    mode.value = isDark.value ? 'dark' : 'light';
}
</script>

<template>
    <Button @click="toogleTheme" class="cursor-pointer" variant="ghost">
        <Sun v-if="mode == 'dark'" />
        <Moon v-else />
    </Button>
</template>