<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel';
import { ref } from 'vue';

const props = defineProps<{
    data: string[]
}>();

const height = ref(window.innerHeight);
</script>

<template>
    <Carousel class="overflow-hidden" :transition="600" :gap="16" :mouse-wheel="true" :items-to-show="1"
        :items-to-scroll="1" dir="ttb" :height="height">
        <Slide v-for="(item, index) in props.data" :key="index">
            <img :src="item" alt="" class="h-full cursor-pointer w-fit object-contain rounded-2xl">
        </Slide>
    </Carousel>
</template>