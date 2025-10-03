<script setup lang="ts">
const form = reactive({
    email: '',
    password: '',
    password_confirmation: ''
});

function signup() {
    alert([form.email, form.password, form.password_confirmation]);
}
</script>

<template>
    <div class="flex flex-col text-2xl gap-2">
        <h1 class="font-bold text-5xl">Sign up</h1>
        <label for="email">Email</label>
        <input v-model="form.email" type="text" name="email" class="outline-1 p-2">
        <label for="password">Password</label>
        <input v-model="form.password" type="password" name="password" class="outline-1 p-2">
        <label for="password">Password confirmation</label>
        <input v-model="form.password_confirmation" type="password" name="password_confirmation" class="outline-1 p-2">
        <button @click="signup()" class="outline-1 p-2 cursor-pointer mt-4">Submit</button>
    </div>
</template>