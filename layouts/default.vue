<template>
  <div class="m-auto flex h-screen w-auto flex-row">
    <client-only>
      <Sidebar class="flex-grow md:w-1/6" />
      <template #placeholder>
        <div class="flex-grow md:w-1/6 bg-gray-100 animate-pulse"></div>
      </template>
    </client-only>
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
