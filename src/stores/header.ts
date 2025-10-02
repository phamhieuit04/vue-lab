import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHeaderStore = defineStore('header', () => {
    const width = ref(0)
    function setWidth(value: number) {
        width.value = value
    }

    const height = ref(0)
    function setHeight(value: number) {
        height.value = value
    }

    return { width, height, setWidth, setHeight }
})
