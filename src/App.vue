<template>
  <TimeSelector title="Sunday Scaries"
    subtitle="A procrastinator’s sleep calculator" />
</template>

<script>
import TimeSelector from './components/TimeSelector.vue'

export default {
  name: 'App',
  components: {
    TimeSelector
  }
}
</script>

<style>
#app {
  @apply antialiased h-screen flex items-center justify-center pb-40 bg-indigo-950 text-white;
}
</style>
