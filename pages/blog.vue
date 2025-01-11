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
      <NuxtLink to="/leetcode">
        <button class="opacity-30 hover:opacity-100">(👨‍💻)</button>
      </NuxtLink>
    </div>
    <span class="text-pretty text-xl tracking-tighter xl:text-2xl/none sm:text-xl">
      <!-- focus, balance and love. -->
      <MorphingText class="text-white" :texts="texts" :morph-time="8" />
    </span>
  </BlurReveal>
</ClientOnly>
<div class="bg-black min-h-screen flex flex-col justify-center items-center">
    <GlowBorder
    :color="['#F5F6F6','#000000']"
    class="w-7/12 relative flex flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent md:shadow-xl -inset-y-32"
    :border-width=2
    :duration=20
    :border-radius=10
    >
      <div class="main p-5 lg:p-10 text-white font-mono lg:text-xl flex flex-col items-start gap-3 w-full z-30">
        <p class="">{{ result?.response?.candidates?.[0]?.content?.parts?.[0]?.text || 'Loading...' }}</p>
      </div>
    </GlowBorder>
  </div>
</template>

<script lang="ts" setup>
const texts = ["focus.","balance.",'love.'];


import { GoogleGenerativeAI } from "@google/generative-ai";
import type { Content } from "@google/generative-ai/server";

const config = useRuntimeConfig();
const key = config.public.googleApiKey
const genAI = new GoogleGenerativeAI(key);
// const s:Content = {
//   parts: [{text: }],
//   role: "model",
// }
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction:"you are a friendly ai that works on the 'project 2025' webpage. the project2025 website is made by sumir who also has written all the code for the website himself. you're job is to inform the users that the blogs section of the website is coming soon in a very creative way. dont be too long and sweet. you also have the knowledge that there are two other sections in the website. namely being the home page where sumir is tracking all the goals for the year and another section being the leetcode section where he is tracking his leetcode solving journey day by day. use emojis wherever required."});
// model.systemInstruction = s

const prompt = "when is the blogs section coming out?";

const result = await model.generateContent(prompt);

</script>

<style>

</style>