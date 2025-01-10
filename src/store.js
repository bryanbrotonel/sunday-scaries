import { reactive } from 'vue';

const defaultTime = new Date();
defaultTime.setDate(defaultTime.getDate() + 1);
defaultTime.setHours(7);
defaultTime.setMinutes(30);
const currentHour = defaultTime.getHours();
const currentMinute = defaultTime.getMinutes();
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
  resultType: 'bedtime',
  setResultType(type) {
    this.resultType = type;
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
