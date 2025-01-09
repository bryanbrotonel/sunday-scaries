<template>
  <div>
    <h1>{{ formatTime(time) }}</h1>
    <div class="flex gap-4">
      <h6>Cycles: {{ cycles }}</h6>
      <h6>Duration: {{ hours }}</h6>
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