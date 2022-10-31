<template>
    <section class="text-center">
        <ul>
            <li>
                <NuxtLink to="/movie">Movie</NuxtLink>
            </li>
        </ul>
    </section>
</template>

<script setup>

definePageMeta({
    middleware: 'auth'
})

</script>