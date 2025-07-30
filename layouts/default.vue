<template>
  <div class="m-auto flex h-screen w-auto flex-row">
    <Sidebar class="flex-grow md:w-1/6" />
    <div class="flex-grow md:w-5/6">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// Nuxt 3 uses setup script by default
// Head management is now done in nuxt.config.ts or useSeoMeta

useSeoMeta({
  title: 'Tobi van Bronswijk',
  description: 'Software Engineer - Portfolio Website'
})

// Add body classes
useHead({
  bodyAttrs: {
    class: 'bg-hero-pattern text-blue-600'
  }
})
</script>

<style scoped>
</style>
