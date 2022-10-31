<template>
    <Head>
        <Title>{{ $route.params.slug || 'empty slug' }}</Title>
    </Head>
    <h1>{{ $route.params.slug || 'empty slug' }}</h1>
</template>

<script setup>

useHead({
    titleTemplate: titleChunk => {
        return titleChunk ? `${ titleChunk } - Site Title` : 'Site Title'
    }
})

definePageMeta({
    validate: async route => {
        if ( route.params.slug !== null ) {
            if ( route.params.slug === 'black-adam' ) return true
            else return { statusCode: '404', statusMessage: 'Upps, MCU Fans detected' }
        }
        return { statusCode: '403', statusMessage: 'Slug required' }
    }
})

</script>