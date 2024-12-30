<template>
  <div>
    <div class="text-center space-y-2">
      <h1 class="text-3xl font-bold text-primary-300">Results</h1>
      <h2 class="text-lg font-medium text-white">Your time is saved</h2>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <div>
        <p class="text-2xl font-bold">{{ formattedTime }}</p>
      </div>
      <div>
        <button @click="reset"
          class="rounded-xl p-2 px-8 bg-primary-300 text-primary-950 font-medium transition-transform transform hover:bg-opacity-90 active:scale-95">
          Calculate Again
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store.js'
import { is12HourFormat } from '../utils.js'

function reset() {
  store.setTime(0);
  store.setCurrentPage('calculator');
}

export default {
  name: 'SleepResults',
  props: {
    time: Number,
  },
  computed: {
    formattedTime() {
      return new Date(store.time).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: is12HourFormat(),
      });
    },
  },
  methods: {
    reset,
  },
}
</script>