<template>
  <Title>(Project 2025.) - leetcode</Title>
  <ClientOnly>
    <BlurReveal
    :delay="0.15"
    :duration="0.4"
    class="p-4 m-4 text-white bg-black justify-center items-center flex flex-col"
    >
    <div class="flex">
      <h2 class="text-3xl text-pretty font-bold font-mono tracking-tight xl:text-6xl/none sm:text-5xl">leetcode👨‍💻</h2>
      <NuxtLink to="/">
        <button class="opacity-30 hover:opacity-100">(🏠)</button>
      </NuxtLink>
      <NuxtLink to="/blog">
        <button class="opacity-30 hover:opacity-100">(📃)</button>
      </NuxtLink>
    </div>
    <span class="text-pretty text-xl tracking-tighter xl:text-2xl/none sm:text-xl">
      <!-- focus, balance and love. -->
      <MorphingText class="text-white" :texts="texts" :morph-time="8" />
    </span>
  </BlurReveal>

  <div class="bg-black min-h-screen flex flex-col justify-center items-center">
    <GlowBorder
    :color="['#F5F6F6','#000000']"
    class="w-7/12 relative flex flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent md:shadow-xl -inset-y-32"
    :border-width=2
    :duration=20
    :border-radius=10
    >
      <div class="main p-5 lg:p-10 text-white font-mono lg:text-xl flex flex-col items-start gap-3 w-full z-30">
        <!-- <div>
          <div class="text-gray-400 opacity-80 font-sans font-thin tracking-tighter italic">
            <p>time: 21:00</p>
            <p>date: 9 jan 25</p>
          </div>
          <p>solved problem number <LinkPreview url="https://leetcode.com/problems/palindrome-number/description/" linkClass="text-blue-600 italic opacity-90">
              (9)
          </LinkPreview> </p>
        </div>

        <div>
          <div class="text-gray-400 opacity-80 font-sans font-thin tracking-tighter italic">
            <p>time: 23:45</p>
            <p>date: 9 jan 25</p>
          </div>
          <p>solved problem number <LinkPreview url="https://leetcode.com/problems/palindrome-number/description/" linkClass="text-blue-600 italic opacity-90">
              (9)
          </LinkPreview> </p>
        </div> -->

        <div v-for="date in Object.keys(tracker)" :key="date">
          <p class="text-gray-400 opacity-80 font-sans font-thin tracking-tighter italic transition ease-out  hover:duration-300 hover:text-gray-100">{{ new Date(date).toDateString() }}</p>
          <div v-for="problem in tracker[date]" class="mx-3 lg:mx-5 opacity-90">
            <p>◦ solved <LinkPreview :url="problem.url" linkClass="text-blue-600 italic opacity-90">
                ({{ problem.pnumber }})
              </LinkPreview>
              - {{ problem.title }} <sub :class="['font-thin','italic',problem.difficulty=='easy'?'text-green-500':problem.difficulty=='medium'?'text-yellow-500':'text-red-500', '-inset-x-2', 'opacity-80 font-sans']">({{ problem.difficulty }})</sub>
            </p> 
          </div>
        </div>


      </div>
    </GlowBorder>
  </div>


  </ClientOnly>
</template>

<script lang="ts" setup>
const texts = ["focus.","balance.",'love.'];

// date --> array of problems as objects with url, title and time
const tracker = <{
    [x: string]: {
        url: string;
        title: string;
        time: string;
        pnumber: number;
        difficulty: 'easy' | 'medium' | 'hard';
    }[];
}>{

  [new Date(2025, 0, 11).toISOString()]: [
    {
      url: "https://leetcode.com/problems/longest-common-prefix/description/",
      title: "longest common prefix",
      time: "23:00",
      pnumber: 14,
      difficulty: "easy"
    }
  ],

  [new Date(2025, 0, 10).toISOString()]: [
    {
      url: "https://leetcode.com/problems/string-to-integer-atoi/description/",
      title: "string to integer atoi",
      time: '22:50',
      pnumber: 8,
      difficulty: 'medium'
    },
    {
      url:"https://leetcode.com/problems/reverse-integer/description/",
      title: "reverse integer",
      time: '21:30',
      pnumber: 7,
      difficulty: 'medium'
    }
  ],


  [new Date(2025, 0, 9).toISOString()]: [
    {
      url: "https://leetcode.com/problems/roman-to-integer/description/",
      title: "roman to integer",
      time: "23:45",
      pnumber: 13,
      difficulty: "easy"
    },
    {
      url: "https://leetcode.com/problems/palindrome-number/description/",
      title: "palindrome number",
      time: "21:00",
      pnumber: 9,
      difficulty: "easy",
    }
  ],
}

</script>

<style>

</style>