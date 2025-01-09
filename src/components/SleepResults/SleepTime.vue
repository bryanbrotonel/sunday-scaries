<template>
  <div class="border-2 border-white/40 bg-black/5 p-4 rounded-xl space-y-3">
    <div class="flex align-center gap-2">
      <h1 class="font-bold text-3xl text-primary-300">{{ formatTime(time) }}</h1>
      <div class="space-x-2 flex items-center text-sm">
        <span>&#x1F504; {{ cycles }}</span>
        <span>&#x1F551; {{ hours }}</span>
      </div>
    </div>
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
</template>

<script>

import { formatTime } from '../../utils.js';

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
};
</script>