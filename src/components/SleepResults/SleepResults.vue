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
        <div class="space-y-4">
          <template v-for="(result, index) in sleepTimes" :key="index">
            <SleepTime :time="result.time" :cycles="result.cycles" :hours="result.duration / 60" />
          </template>
        </div>
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
import { store } from '../../store.js'
import SleepTime from './SleepTime.vue'
import { formatTime, calculateOptimalSleepTimes } from '../../utils.js'

function reset() {
  store.setTime(0);
  store.setCurrentPage('calculator');
}

export default {
  name: 'SleepResults',
  props: {
    time: Number,
  },
  components: {
    SleepTime,
  },
  computed: {
    formattedTime() {
      return formatTime(store.time);
    },
  },
  methods: {
    reset,
    formatTime,
    calculateOptimalSleepTimes,
  },
  data() {
    return {
      store,
      sleepTimes: calculateOptimalSleepTimes(store.time),
    }
  }
}
</script>