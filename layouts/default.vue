<template>
  <div class="m-auto flex h-screen w-auto flex-row">
    <Sidebar class="flex-grow md:w-1/6" />
    <div class="flex-grow md:w-5/6">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {
    // Lazy load the Sidebar component for better performance
    Sidebar: () => import('~/components/Sidebar.vue')
  },
  head: () => ({
    title: 'default page',
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'bg-hero-pattern text-blue-600',
    },
  }),
})
</script>

<style scoped>
</style>
