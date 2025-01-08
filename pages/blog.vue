<template>
  <Title>(Project 2025.) - blog</Title>
  <ClientOnly>
    <BlurReveal
    :delay="0.15"
    :duration="0.4"
    class="p-4 m-4 text-white bg-black justify-center items-center flex flex-col"
    >
    <div class="flex">
      <h2 class="text-3xl text-pretty font-bold font-mono tracking-tight xl:text-6xl/none sm:text-5xl">blogs📃</h2>
      <NuxtLink to="/">
        <button class="opacity-30 hover:opacity-100">(🏠)</button>
      </NuxtLink>
    </div>
    <span class="text-pretty text-xl tracking-tighter xl:text-2xl/none sm:text-xl">
      <!-- focus, balance and love. -->
      <MorphingText class="text-white" :texts="texts" :morph-time="8" />
    </span>
    
  </BlurReveal>
  </ClientOnly>
</template>

<script lang="ts" setup>
const texts = [
  "focus.","balance.",'love.'];
</script>

<style>

</style>