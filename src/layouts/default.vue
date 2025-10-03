<script setup lang="ts">
const route = useRoute();
</script>

<template>
    <slot v-if="route.name == 'Auth' || route.name == '404'" />
    <SidebarProvider v-else>
        <AppSidebar />
        <SidebarInset>
            <main>
                <AppHeader />
                <slot />
            </main>
        </SidebarInset>
    </SidebarProvider>
</template>