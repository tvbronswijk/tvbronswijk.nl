<template>
  <main>
    <section
      id="titlepage"
      class="container mx-auto hidden h-screen flex-auto md:flex"
    >
      <div class="mx-auto my-auto flex-initial text-gray-900">
        <h1 class="text-4xl lg:text-6xl">Hi. I'm Tobi van Bronswijk.</h1>
        <h2 class="text-2xl lg:text-4xl">This is my website.</h2>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
// Use the new SEO composables with static data for now
useSeoMeta({
  title: 'Tobi van Bronswijk',
  description: 'Software Developer for .NET Core and .NET Framework.',
  ogTitle: 'Tobi van Bronswijk',
  ogDescription: 'Software Developer for .NET Core and .NET Framework.',
  ogType: 'website',
  ogUrl: 'https://tvbronswijk.nl/',
  ogImage: 'https://tvbronswijk.nl/images/profile-optimized.jpg'
})
</script>
