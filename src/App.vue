<template>
  <div class="flex flex-col min-h-screen">
    <div
      class="flex flex-grow flex-col mx-auto lg:mx-0 lg:flex-row gap-5 lg:justify-center p-4 lg:p-0 lg:mt-32"
    >
      <div
        class="hidden lg:block xl:mb-auto sticky max-w-lg top-0 space-y-8 lg:top-32"
      >
        <SleepHeader />
        <SleepInfo />
      </div>
      <div class="lg:hidden">
        <SleepHeader />
      </div>
      <div class="flex-grow lg:w-1/2 lg:max-w-lg">
        <main class="container mx-auto px-4 lg:px-0">
          <SleepCalculator
            subtitle="A procrastinator&rsquo;s sleep calculator"
            v-if="store.currentPage === 'calculator'"
          />
          <SleepResults v-if="store.currentPage === 'results'" />
        </main>
      </div>
      <div class="lg:hidden max-w-96">
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
  mounted() {
    document.title = 'Sunday Scaries';
  },
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
