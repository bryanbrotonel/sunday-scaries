<template>
  <div
    class="flex flex-col sm:flex-row justify-center items-center gap-8">
    <div class="bg-indigo-900 p-8 rounded-lg">
      <TimeSelector title="How Much Sleep Can I Get?"
        subtitle="A procrastinator&rsquo;s sleep calculator" />
    </div>
    <div class="bg-indigo-900 p-8 rounded-lg">
      <SleepResults />
    </div>
  </div>
</template>

<script>
import TimeSelector from './components/TimeSelector.vue'
import SleepResults from './components/SleepResults.vue'

export default {
  name: 'App',
  components: {
    TimeSelector,
    SleepResults
  }
}
</script>

<style>
#app {
  @apply antialiased h-screen flex items-center justify-center pb-40 bg-indigo-950 text-white;
}
</style>
