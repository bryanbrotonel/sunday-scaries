<template>
  <div class="border-2 border-white/30 bg-black/5 p-4 rounded-xl space-y-3 max-w-80">
    <div class="flex align-center gap-2">
      <h1 class="font-bold text-2xl text-amber-300">{{ formatTime(time) }}</h1>
      <div class="space-x-2 flex items-center text-sm">
        <span>&#x1F504; {{ cycles }}</span>
        <span>&#x1F551; {{ hours }}</span>
      </div>
    </div>
    <div>
      <p v-html="message"></p>
    </div>
  </div>
</template>

<script>
import { formatTime, getSleepMessage } from '../../utils.js';

export default {
  name: 'SleepTime',
  props: {
    time: {
      type: Number,
      required: true,
    },
    cycles: {
      type: Number,
      required: true,
    },
    hours: {
      type: Number,
      required: true,
    },
  },
  methods: {
    formatTime,
  },
  data() {
    return {
      message: '&#129500;',
    };
  },
  async created() {
    this.message = await getSleepMessage(this.hours);
  },
};
</script>
