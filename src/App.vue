<template>
  <div class="flex flex-col sm:flex-row justify-center items-center gap-12">
    <SleepHeader />
    <div class="w-96 max-w-full">
      <SleepCalculator subtitle="A procrastinator&rsquo;s sleep calculator"
        v-if="store.currentPage === 'calculator'" />
      <SleepResults v-if="store.currentPage === 'results'" />
    </div>
  </div>
</template>

<script>
import { store } from './store.js';
import SleepHeader from './components/SleepHeader.vue';
import SleepCalculator from './components/SleepCalculator.vue'
import SleepResults from './components/SleepResults/SleepResults.vue'

export default {
  name: 'App',
  components: {
    SleepHeader,
    SleepCalculator,
    SleepResults,
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<style>
#app {
  @apply antialiased h-screen flex items-center justify-center pb-40 bg-primary-950 text-white;
}
</style>
