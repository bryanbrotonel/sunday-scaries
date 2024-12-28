<template>
  <div class="space-y-10">
    <div class="text-center space-y-2">
      <h1 class="text-3xl font-bold">{{ title }}</h1>
      <h2 class="text-lg font-medium opacity-50">{{ subtitle }}</h2>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <TimePicker />
      <div>
        <button @click="saveChanges()"
          class="rounded-full p-2 px-6 bg-yellow-500 text-indigo-950 font-medium transition-transform transform hover:bg-yellow-600 active:scale-95">
          Save Changes
        </button>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <h1 class="text-lg font-medium">If you went to bed now...</h1>
      <button @click="saveChanges(true)"
        class="rounded-full p-2 px-6 bg-yellow-500 text-indigo-950 font-medium transition-transform transform hover:bg-yellow-600 active:scale-95">
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
