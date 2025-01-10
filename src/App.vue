<template>
  <div class="flex flex-col min-h-screen">
    <div
      class="flex flex-grow flex-col md:flex-row gap-10 md:justify-center p-4 sm:p-0 sm:mt-32"
    >
      <div class="hidden sm:block md:mb-auto sticky max-w-md top-0 space-y-8 md:top-32">
        <SleepHeader />
        <SleepInfo />
      </div>
      <div class="sm:hidden">
        <SleepHeader />
      </div>
      <div class="flex-grow md:w-1/2 md:max-w-lg">
        <main class="container mx-auto px-4 md:px-0">
          <SleepCalculator
            subtitle="A procrastinator&rsquo;s sleep calculator"
            v-if="store.currentPage === 'calculator'"
          />
          <SleepResults v-if="store.currentPage === 'results'" />
        </main>
      </div>
      <div class="sm:hidden">
        <SleepInfo />
      </div>
    </div>
    <footer class="mt-auto">
      <div class="mt-12 text-center text-xs bg-black/10 py-2">
        Made with <span class="text-red-500">❤️</span> by
        <a
          href="https://bryanbrotonel.vercel.app"
          class="text-primary-300 hover:underline"
          >Bryan Brotonel</a
        >
      </div>
    </footer>
  </div>
</template>

<script>
import { store } from './store.js';
import SleepHeader from './components/SleepHeader.vue';
import SleepInfo from './components/SleepInfo.vue';
import SleepCalculator from './components/SleepCalculator.vue';
import SleepResults from './components/SleepResults/SleepResults.vue';

export default {
  name: 'App',
  components: {
    SleepHeader,
    SleepInfo,
    SleepCalculator,
    SleepResults,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style>
#app {
  @apply antialiased bg-primary-950 text-white;
}
</style>
