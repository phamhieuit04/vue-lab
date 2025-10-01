<template>
    <ul>
        <li v-for="i in 10" class="hover:underline my-2">
            <RouterLink :to="`/messages/${i}`">Message {{ i }}</RouterLink>
        </li>
    </ul>
</template>