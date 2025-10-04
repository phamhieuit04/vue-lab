<script setup lang="ts">
import { useHeaderStore } from '@/stores/header';

const props = defineProps<{
    data: string[]
}>();

const headerStore = useHeaderStore();

const height = ref(800);
function setHeight() {
    height.value = window.innerHeight - headerStore.height - 50;
}

onMounted(() => {
    setHeight();
})

window.addEventListener('resize', () => {
    setHeight();
});

const options = ref({
    height: height,
    arrows: false,
    pagination: false,
    waitForTransition: true,
    wheel: true,
    direction: 'ttb',
    perPage: 1,
    perMove: 1,
    gap: 32
});

function onActive(slide: any) {
    console.log(slide.index);
}
</script>

<template>
    <Splide :options="options" tag="section" @splide:active="onActive">
        <SplideSlide v-for="(item, index) in props.data" :key="index">
            <img :src="item" class="cursor-pointer object-contain w-full" :style="{ height: height + 'px' }">
        </SplideSlide>
    </Splide>
</template>