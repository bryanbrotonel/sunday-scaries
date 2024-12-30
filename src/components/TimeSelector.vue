<template>
  <div class="space-y-10">
    <div class="text-center space-y-2">
      <h1 class="text-3xl font-bold text-primary-300">{{ title }}</h1>
      <h2 class="text-lg font-medium text-white">{{ subtitle }}</h2>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <TimePicker />
      <div>
        <button @click="saveChanges()"
          class="rounded-xl p-2 px-10 bg-primary-300 text-primary-950 font-medium transition-transform transform hover:bg-opacity-90 active:scale-95">
          Save Changes
        </button>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <h1 class="text-lg font-medium">If you went to bed now...</h1>
      <button @click="saveChanges(true)"
        class="rounded-xl p-2 px-10 bg-primary-300 text-primary-950 font-medium transition-transform transform hover:bg-opacity-90 active:scale-95">
        Good luck
      </button>
    </div>
  </div>
</template>

<script>
import TimePicker from './TimePicker.vue';
import { store } from '../store.js';

export default {
  name: 'TimeSelector',
  props: {
    title: String,
    subtitle: String
  },
  components: {
    TimePicker
  },
  computed: {
    timePicker() {
      return store.timePicker;
    }
  },
  methods: {
    saveChanges(current = false) {
      const { hour, minute, median } = this.timePicker;
      let dateToSave = new Date();

      if (!current) {
        const currentDate = new Date();
        dateToSave = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate(),
          median === 'AM' ? hour : hour + 12,
          minute
        );
      }

      store.setTime(dateToSave.valueOf())
    }
  }
}
</script>
