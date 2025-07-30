<template>
  <aside
    class="xl:h-90vp xl:rounded-10 flex h-screen w-full flex-col border-blue-300 bg-gray-100 p-8 lg:w-96 lg:border-r-2 xl:border-2"
  >
    <section id="sb_profile" class="flex-initial text-center">
      <div>
        <h2 class="font-sans text-2xl normal-case text-blue-700">
          Tobi van Bronswijk
        </h2>
        <p class="font-mono text-xl uppercase text-blue-900">
          Software Engineer
        </p>
      </div>
      <div class="my-4 mx-auto w-1/3 lg:w-2/3">
        <picture class="mx-auto w-full rounded-full border-2 border-blue-300 block">
          <!-- WebP format for modern browsers -->
          <source 
            srcset="/images/profile-small-fit.webp 400w, /images/profile.webp 800w" 
            sizes="(max-width: 768px) 133px, (max-width: 1024px) 200px, 267px"
            type="image/webp"
          />
          <!-- Fallback JPEG for older browsers -->
          <source 
            srcset="/images/profile-optimized.jpg 800w" 
            sizes="(max-width: 768px) 133px, (max-width: 1024px) 200px, 267px"
            type="image/jpeg"
          />
          <!-- Fallback img element -->
          <img
            src="/images/profile-optimized.jpg"
            alt="Tobi van Bronswijk profile picture"
            class="mx-auto w-full rounded-full border-2 border-blue-300"
            loading="lazy"
            width="400"
            height="400"
            decoding="async"
          />
        </picture>
      </div>
    </section>
    <section
      id="sb_social_links"
      class="my-2 flex flex-initial flex-row items-center text-center xl:flex-col xl:items-start xl:text-left"
    >
      <div class="mx-2 my-2 inline-block w-auto flex-1">
        <a
          href="https://github.com/tvbronswijk"
          target="_blank"
          rel="noopener"
          name="GitHub"
          aria-label="GitHub"
          class="link"
        >
          <SocialIcon icon="github" />
          <span class="hidden md:inline">@tvbronswijk</span>
        </a>
      </div>
      <div class="mx-2 my-2 inline-block w-auto flex-1 font-sans">
        <a
          href="https://www.linkedin.com/in/tobi-van-bronswijk/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          class="link"
        >
          <SocialIcon icon="linkedin" />
          <span class="hidden md:inline">Tobi van Bronswijk</span>
        </a>
      </div>

      <div class="mx-2 my-2 inline-block w-auto flex-1">
        <a
          href="https://twitter.com/tvbronswijk"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
          class="link"
        >
          <SocialIcon icon="twitter" />
          <span class="hidden md:inline">@tvbronswijk</span>
        </a>
      </div>
    </section>
    <section id="sb_navigation" class="my-auto flex-initial">
      <nav class="my-auto py-4">
        <ul class="flex flex-col text-center text-2xl lg:text-right lg:text-lg">
          <!--
          <li class="flex-1 py-4 lg:py-1">
            <a href="#titlepage" class="hover:underline">Home</a>
          </li>
          <li class="flex-1 py-4 lg:py-1">
            <a href="#skills" class="hover:underline">Skills</a>
          </li>
          <li class="flex-1 py-4 lg:py-1">
            <a href="#portfolio" class="hover:underline">Projects</a>
          </li>
          <li class="flex-1 py-4 lg:py-1">
            <a href="#contact" class="hover:underline">Contact</a>
          </li>
          -->
        </ul>
      </nav>
    </section>
    <section
      id="sb_footer"
      class="mt-auto flex w-full flex-initial flex-row self-end"
    >
      <footer class="w-full text-right">
        Made with
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noreferrer"
          name="NuxtJS"
          class="font-bold text-green-400"
          >NuxtJS</a
        >
        and
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer"
          name="TailwindCSS"
          class="font-bold text-blue-400"
          >TailwindCSS</a
        >
        <br />
        ©2022 Tobi van Bronswijk
      </footer>
    </section>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'
import SocialIcon from './SocialIcon.vue'

export default Vue.extend({
  components: {
    SocialIcon
  }
})
</script>

<style scoped>
</style>
