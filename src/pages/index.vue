<script setup lang="ts">
definePage({
    'meta': {
        title: 'Home'
    }
});

const images = [
    "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://picsum.photos/id/1015/800/400",
    "https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://picsum.photos/id/1016/800/400",
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://picsum.photos/id/1025/800/400",
    "https://picsum.photos/id/1020/800/400",
]
</script>

<template>
    <div class="flex items-center justify-center gap-2 p-4">
        <AppCarousel :data="images" />
    </div>
</template>