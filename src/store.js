import { reactive } from 'vue';

const currentTime = new Date();
const currentHour = currentTime.getHours();
console.log('🚀 ~ currentHour:', currentHour)
const currentMinute = currentTime.getMinutes();
const is12HourFormat = currentHour >= 12 ? 'PM' : 'AM';
const hourIn12Format = currentHour % 12 || 12;
console.log('🚀 ~ hourIn12Format:', hourIn12Format)

export const store = reactive({
  time: 0,
  setTime(time) {
    this.time = time;
  },
  timePicker: {
    hour: hourIn12Format,
    minute: currentMinute,
    median: is12HourFormat,
  },
  setHour(hour) {
    this.timePicker.hour = hour;
  },
  setMinute(minute) {
    this.timePicker.minute = minute;
  },
  setMedian(median) {
    this.timePicker.median = median;
  },
});
