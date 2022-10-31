<template>
  <NuxtPage></NuxtPage>
</template>

<script setup>

import '~/assets/tailwind.css'

</script>

<style>

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

</style>