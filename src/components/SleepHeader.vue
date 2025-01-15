<template>
  <div class="space-y-1 text-center">
    <div
      class="relative rounded-xl px-6 pt-7 bg-primary-950 text-white overflow-hidden w-fit mx-auto"
    >
      <div>
        <!-- Sleeping Face -->
        <span class="absolute top-3 left-0 -rotate-[30deg]">&#x1F634;</span>
        <!-- Crescent Moon -->
        <span class="absolute top-0 left-10 -rotate-12">&#x1F319;</span>
        <!-- Star -->
        <span class="absolute top-1 left-24 -rotate-12">&#x2B50;</span>
        <!-- Alarm Clock -->
        <span class="absolute top-1 right-30 rotate-12">&#x23F0;</span>
        <!-- Sun Behind Cloud -->
        <span class="absolute top-0 right-20 -rotate-12">&#x26c5;</span>
        <!-- Smiling Face with Horns -->
        <span class="absolute top-2 right-10 -rotate-12">&#x1F608;</span>
        <!-- Sleepy Face -->
        <span class="absolute top-3 right-0 rotate-12">&#x1F4A4;</span>
      </div>
      <h1 class="font-extrabold text-4xl text-primary-300 relative z-10 mt-0.5">
        Sunday Scaries
      </h1>
    </div>
    <h6 class="font-semibold text-lg text-white">
      A procrastinator&rsquo;s sleep calculator
    </h6>
  </div>
</template>

<script>
export default {
  name: 'SleepHeader',
};
</script>
