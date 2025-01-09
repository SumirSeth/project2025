<template>
  <ClientOnly>
    <BlurReveal
    :delay="0.15"
    :duration="0.4"
    class="p-4 m-4 text-white bg-black justify-center items-center flex flex-col"
    >
    <div class="flex">
      <h2 class="text-3xl text-pretty font-bold font-mono tracking-tight xl:text-6xl/none sm:text-5xl">Project 2025🤖</h2>
      <NuxtLink to="/blog">
        <button class="opacity-30 hover:opacity-100">(📃)</button>
      </NuxtLink>
      <NuxtLink to="/leetcode">
        <button class="opacity-30 hover:opacity-100">(👨‍💻)</button>
      </NuxtLink>
    </div>
    <span class="text-pretty text-xl tracking-tighter xl:text-2xl/none sm:text-xl">
      <!-- focus, balance and love. -->
      <MorphingText class="text-white" :texts="texts" morph-time="8" />
    </span>
    
  </BlurReveal>
  </ClientOnly>
  
  <div class="bg-black min-h-screen flex flex-col justify-center items-center">
    <GlowBorder
    :color="['#17d6fc', '#fff830', '#1bf756', '#f405fc', '#f01127']"
    class="w-7/12 relative flex flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent md:shadow-xl -inset-y-32"
    :border-width=3
    :duration=25
    :border-radius=10
    >
      <div class="main p-10 text-white font-mono lg:text-xl flex flex-col items-start gap-3 w-full z-30">
        <div>
          <input type="checkbox" value=" " id="one" class="bg-gray-700 rounded-xl">
          <label for="one" class="text-white"> write 50 technical blogs.</label>
        </div>
        
        
         <div>
          <input type="checkbox" id="two" >
          <label for="two" class="text-white"> a leetcode a day. </label>
          <!-- <NuxtLink class="text-blue-600 italic" to="https://knowledge-base.surge.sh/notes/leetcode">tackling leetcode.</NuxtLink> -->
          <LinkPreview url="https://knowledge-base.surge.sh/notes/leetcode" linkClass="text-blue-600 italic opacity-90">
              (tackling leetcode.)
          </LinkPreview>
        </div>

        <div>
          <input type="checkbox" id="three" >
          <label for="three" class="text-white"> finish the pile of books i have.</label>
        </div>

        
        <div>
          <input type="checkbox" id="four" >
          <label for="four" class="text-white"> invest heavily in meditation.</label>
        </div>

        <div>
          <input type="checkbox" id="five" >
          <label for="five" class="text-white"> forming structure around the day and managing sleep hours.</label>
        </div>

      </div>
    </GlowBorder>
  </div>
</template>

<script setup>
const texts = [
  "focus.","balance.",'love.'];


</script>