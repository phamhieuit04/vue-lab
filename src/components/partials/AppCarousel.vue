<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel';
import { useHeaderStore } from '@/stores/header';

const props = defineProps<{
    data: string[]
}>();

const headerStore = useHeaderStore();

const height = ref(0);
function setHeight() {
    height.value = window.innerHeight - headerStore.height - 50;
}

onMounted(() => {
    setHeight();
})

window.addEventListener('resize', () => {
    setHeight();
});
</script>

<template>
    <Carousel :transition="600" :gap="16" :mouse-wheel="true" :items-to-show="1" :items-to-scroll="1" dir="ttb"
        :height="height">
        <Slide v-for="(item, index) in props.data" :key="index">
            <img :src="item" alt="" class="h-full cursor-pointer w-fit object-contain">
        </Slide>
    </Carousel>
</template>