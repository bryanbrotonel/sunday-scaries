<template>
  <div class="space-y-8">
    <div class="text-center space-y-2">
      <h1 class="text-3xl font-bold text-primary-300">{{ resultTitle }}</h1>
      <h2 class="text-lg">
        {{
          store.resultType === 'bedtime' ? 'To wake up' : 'If you went to bed'
        }}
        at
        <span class="text-yellow-400 font-bold">{{
          formatTime(store.time)
        }}</span
        >{{ store.resultType === 'bedtime' ? ', fall asleep' : ', wake up' }}
        at...
      </h2>
      <div class="max-w-96 mx-auto">
        <p class="text-sm text-white/80">
          Remember, the average human takes around 15 minutes to fall asleep, so
          please plan accordingly. You will thank me later.
        </p>
      </div>
    </div>
    <div class="flex justify-center gap-6 text-primary-300 font-medium text-sm">
      <span>&#x1F504; Sleep Cycles</span>
      <span>&#x1F551; Hours of Sleep</span>
    </div>
    <div class="flex flex-col items-center justify-center gap-6">
      <div class="space-y-6">
        <template v-for="(result, index) in sleepTimes" :key="index">
          <!-- Hours: seconds in minutes / 60 -->
          <SleepTime
            :time="result.time"
            :cycles="result.cycles"
            :hours="result.duration / 60"
          />
        </template>
      </div>
    </div>
    <div class="text-center space-y-2">
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
  window.scrollTo(0, 0); // Scroll to top
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
