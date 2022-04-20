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
import Vue from 'vue'

interface Metadata {
  title: string
  description: string
  type: string
  website: string
  image: string
}

interface AsyncData {
  metadata: Metadata
}

export default Vue.extend({
  async asyncData({ $content, params }): Promise<AsyncData> {
    const resp = await $content('index/metadata', params).fetch()

    return {
      metadata: resp as any as Metadata,
    }
  },

  head() {
    return {
      title: this.metadata.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.metadata.description,
        },
        { hid: 'og:title', name: 'og:title', content: this.metadata.title },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.metadata.description,
        },
        { hid: 'og:type', name: 'og:type', content: this.metadata.type },
        { hid: 'og:url', name: 'og:url', content: this.metadata.website },
        { hid: 'og:image', name: 'og:image', content: this.metadata.image },
      ],
    }
  },
})
</script>
