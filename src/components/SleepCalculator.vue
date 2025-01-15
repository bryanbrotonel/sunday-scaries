<template>
  <div class="space-y-10">
    <div class="flex flex-col items-center justify-center gap-4">
      <h2 class="font-bold">What time will I ignore my alarm?</h2>
      <TimePicker />
      <div>
        <button @click="saveChanges()"
          class="rounded-xl p-2 px-8 bg-primary-300 text-primary-950 font-medium transition-transform transform hover:bg-opacity-80 active:scale-95">
          Calculate &#x1F64F;
        </button>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <h2 lass="font-bold">If you went to bed now...</h2>
      <button @click="saveChanges(true)"
        class="rounded-xl p-2 px-8 bg-primary-300 text-primary-950 font-medium transition-transform transform hover:bg-opacity-80 active:scale-95">
        Good luck &#x1F340;
      </button>
    </div>
  </div>
</template>

<script>
import TimePicker from './TimePicker.vue';
import { store } from '../store.js';

export default {
  name: 'SleepCalculator',
  components: {
    TimePicker
  },
  computed: {
    timePicker() {
      return store.timePicker;
    }
  },
  methods: {
    saveChanges(currentTime = false) {
      const { hour, minute, median } = this.timePicker;
      let dateToSave = new Date();

      if (!currentTime) {
        const currentDate = new Date();
        dateToSave = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate(),
          median === 'AM' ? hour : hour + 12,
          minute
        );
      }

      store.setResultType(currentTime ? 'wakeuptime' : 'bedtime');
      store.setTime(dateToSave.valueOf())
      store.setCurrentPage('results');
    }
  }
}
</script>
