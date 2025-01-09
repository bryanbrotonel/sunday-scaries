<template>
  <div class="space-y-6">
    <div class="text-center space-y-2">
      <h1 class="text-3xl font-bold text-primary-300">Fall asleep at...</h1>
      <p>Remember, the average human takes around 15 minutes to fall asleep, so
        please plan accordingly. You will thank me later.</p>
    </div>
    <div class="flex justify-center gap-4 text-primary-300 font-medium text-sm">
      <span>&#x1F504; Sleep Cycles</span>
      <span>&#x1F551; Hours of Sleep</span>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <div>
        <div class="space-y-4">
          <template v-for="(result, index) in sleepTimes" :key="index">
            <SleepTime :time="result.time" :cycles="result.cycles"
              :hours="result.duration / 60" />
          </template>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button @click="reset"
        class="rounded-xl p-2 px-8 bg-primary-300 text-primary-950 font-medium transition-transform transform hover:bg-opacity-90 active:scale-95">
        Calculate Again
      </button>
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