<template>
  <div>
    <div class="text-center space-y-2">
      <h1 class="text-3xl font-bold">Results</h1>
      <h2 class="text-lg font-medium opacity-50">Your time is saved</h2>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <div>
        <p class="text-2xl font-bold">{{ formattedTime }}</p>
      </div>
      <div>
        <button @click="reset"
          class="rounded-full p-2 px-6 bg-yellow-500 text-indigo-950 font-medium transition-transform transform hover:bg-yellow-600 active:scale-95">
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
  store.time = 0;
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