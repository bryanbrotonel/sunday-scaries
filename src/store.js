import { reactive } from 'vue';

const currentTime = new Date();
const currentHour = currentTime.getHours();
const currentMinute = currentTime.getMinutes();
const is12HourFormat = currentHour >= 12 ? 'PM' : 'AM';
const hourIn12Format = currentHour % 12 || 12;

export const store = reactive({
  currentPage: 'calculator',
  setCurrentPage(page) {
    this.currentPage = page;
  },
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
