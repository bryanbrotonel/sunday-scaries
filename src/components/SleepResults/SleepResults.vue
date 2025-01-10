<template>
  <div class="space-y-6">
    <div class="text-center space-y-1">
      <h1 class="text-2xl font-bold text-primary-300">{{ resultTitle }}</h1>
      <p>
        Remember, the average human takes around 15 minutes to fall asleep, so
        please plan accordingly. You will thank me later.
      </p>
    </div>
    <div class="flex justify-center gap-4 text-primary-300 font-medium text-sm">
      <span>&#x1F504; Sleep Cycles</span>
      <span>&#x1F551; Hours of Sleep</span>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <div class="space-y-4">
        <template v-for="(result, index) in sleepTimes" :key="index">
          <SleepTime
            :time="result.time"
            :cycles="result.cycles"
            :hours="result.duration / 60"
          />
        </template>
      </div>
    </div>
    <div class="text-center">
      <div class="mb-2">
        <p class="font-medium">Can't believe it?</p>
      </div>
      <button
        @click="reset"
        class="rounded-xl p-2 px-4 bg-primary-300 text-primary-950 font-medium transition-transform transform hover:bg-opacity-80 active:scale-95"
      >
        Calculate Again &#x1F923;
      </button>
    </div>
  </div>
</template>

<script>
import { store } from '../../store.js';
import SleepTime from './SleepTime.vue';
import {
  formatTime,
  calculateOptimalSleepTimes,
  calculateWakeUpTimes,
} from '../../utils.js';

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
      sleepTimes:
        store.resultType === 'bedtime'
          ? calculateOptimalSleepTimes(store.time)
          : calculateWakeUpTimes(store.time),
      resultTitle: store.resultType === 'bedtime' ? 'Bedtime' : 'Wake-up Time',
    };
  },
};
</script>
