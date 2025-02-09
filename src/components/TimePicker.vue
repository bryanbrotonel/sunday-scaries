<template>
  <div
    class="rounded-2xl border-primary-300 border-4 bg-primary-900 text-white px-8"
  >
    <div class="overflow-hidden">
      <swiper
        v-for="(items, index) in swipers"
        :key="index"
        :slides-per-view="3"
        :direction="'vertical'"
        :centered-slides="true"
        :slide-to-clicked-slide="true"
        :initial-slide="items.initialSlide"
        :loop="items.loop"
        :speed="10"
        :mousewheel="{ sensitivity: 100 }"
        :modules="swiperModules"
        @slideChange="onSlideChange(index, $event)"
        class="w-20 h-40 float-left"
      >
        <swiper-slide
          v-for="(item, index) in items.list"
          :key="index"
          class="flex justify-center items-center text-center text-2xl select-none text-primary-400 transition-opacity duration-300 ease cursor-default font-bold tap-highlight-transparent h-full hover:cursor-ns-resize"
        >
          <div class="h-full flex items-center justify-center">
            <span>{{ item }}</span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel } from 'swiper/modules';
import { store } from '../store.js';
import { is12HourFormat } from '../utils.js';

import 'swiper/swiper-bundle.css';

export default {
  name: 'TimePicker',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      swiperModules: [Mousewheel],
    };
  },
  data() {
    return {
      swipers: [
        {
          list: this.generateHourList(),
          initialSlide: is12HourFormat()
            ? store.timePicker.hour - 1
            : store.timePicker.hour, // Based on index of hour item, so -1 for 12-hour format, otherwise same
          loop: true,
        },
        {
          list: Array.from({ length: 60 }, (_, i) =>
            i.toString().padStart(2, '0')
          ),
          initialSlide: store.timePicker.minute,
          loop: true,
        },
        {
          list: is12HourFormat() ? ['AM', 'PM'] : [],
          initialSlide: store.timePicker.median === 'AM' ? 0 : 1,
          loop: false,
        },
      ],
    };
  },
  methods: {
    generateHourList() {
      return Array.from({ length: is12HourFormat() ? 12 : 24 }, (_, i) =>
        (is12HourFormat() ? i + 1 : i).toString().padStart(2, '0')
      );
    },
    onSlideChange(swiperIndex, event) {
      switch (swiperIndex) {
        case 0:
          store.setHour(
            is12HourFormat() ? event.realIndex + 1 : event.realIndex
          );
          break;
        case 1:
          store.timePicker.minute = event.realIndex;
          store.setMinute(event.realIndex);
          break;
        case 2:
          store.setMedian(event.realIndex === 0 ? 'AM' : 'PM');
          break;
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
.swiper-slide-active {
  @apply text-white;
}
</style>
