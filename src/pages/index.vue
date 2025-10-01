<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel';
import { computed, ref } from 'vue';

definePage({
    'meta': {
        title: 'Home'
    }
});

const images = [
    "https://picsum.photos/id/1015/800/400",
    "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://picsum.photos/id/1016/800/400",
    "https://picsum.photos/id/1025/800/400",
    "https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://picsum.photos/id/1020/800/400",
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

// const height = ref(800);

// const caculateHeight = (value) => {
//     let img = new Image();
//     img.src = images[value.currentSlideIndex];
//     console.log(img.width, img.height);
// }
</script>

<template>
    <div class="flex items-center justify-center m-5">
        <Carousel @slide-start="caculateHeight" class="overflow-hidden" :transition="600" :gap="16" :mouse-wheel="true"
            :items-to-show="1" :items-to-scroll="1" :height="800" dir="ttb" v-slot="{ currentSlide }">
            <Slide v-for="(img, index) in images" :key="index" class="transition-all duration-600 ease-in-out" :class="{
                'opacity-100 scale-100': index == currentSlide,
                'opacity-0 scale-95': currentSlide < index < currentSlide
            }">
                <img :src="img" alt="" class="h-full cursor-pointer w-fit object-contain rounded-2xl">
            </Slide>
        </Carousel>
    </div>
</template>