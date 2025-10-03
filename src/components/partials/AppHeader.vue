<script setup lang="ts">
import { useHeaderStore } from '@/stores/header';
import { Search } from 'lucide-vue-next';

const route = useRoute();
const headerStore = useHeaderStore();

const header = useTemplateRef('header');
function setHeaderSize() {
    headerStore.setWidth(header.value.clientWidth);
    headerStore.setHeight(header.value.clientHeight);
}

onMounted(() => {
    setHeaderSize();
})

window.addEventListener('resize', () => {
    setHeaderSize();
});
</script>

<template>
    <header ref="header"
        class="sticky z-10 top-0 flex shrink-0 items-center justify-between gap-2 border-b bg-background p-4">
        <div class="flex gap-2 items-center">
            <SidebarTrigger class="cursor-pointer" />
            <h1 class="font-medium">{{ route.meta.title ?? 'Messages' }}</h1>
        </div>
        <div class="flex items-center gap-2">
            <div class="relative w-full max-w-sm items-center">
                <Input id="search" type="text" placeholder="Search..." class="pl-10" />
                <span class="absolute start-0 inset-y-0 flex items-center justify-center pl-3">
                    <Search class="size-4 text-muted-foreground" />
                </span>
            </div>
            <Button class="cursor-pointer">Button</Button>
        </div>
    </header>
</template>