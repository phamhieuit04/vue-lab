<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <slot v-if="route.name == 'Auth' || route.name == '404'" />
    <SidebarProvider v-else>
        <AppSidebar />
        <SidebarInset>
            <AppHeader />
            <main class="px-5">
                <slot />
            </main>
        </SidebarInset>
    </SidebarProvider>
</template>