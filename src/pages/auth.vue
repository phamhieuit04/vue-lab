<script setup lang="ts">
import { ref } from 'vue';

definePage({
    name: "Auth"
});

const choose = ref('login');
function setChoose(value: string) {
    choose.value = value;
}
</script>

<template>
    <div class="container mx-auto flex items-center justify-center h-screen">
        <div>
            <Login v-show="choose == 'login'" />
            <Signup v-show="choose == 'signup'" />
            <ul class="flex justify-between items-center mt-5">
                <li @click="setChoose('login')" class="cursor-pointer">Login</li>
                <li @click="setChoose('signup')" class="cursor-pointer">Sign up</li>
            </ul>
        </div>
    </div>
</template>