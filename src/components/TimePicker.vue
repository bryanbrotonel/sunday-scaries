<template>
  <div class="rounded-2xl border-yellow-500 border-4 bg-indigo-800 text-white">
    <div class="overflow-hidden">
      <swiper v-for="(items, index) in swipers" :key="index"
        :slides-per-view="3" :direction="'vertical'" :centered-slides="true"
        :slide-to-clicked-slide="true" :initial-slide="items.initialSlide"
        :loop="items.loop" class="w-20 h-40 float-left"
        @slideChange="onSlideChange">
        <swiper-slide v-for="(item, index) in items.list" :key="index"
          class="flex justify-center items-center text-center text-2xl select-none opacity-25 transition-opacity duration-300 ease cursor-default font-bold tap-highlight-transparent h-full">
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
import { is12HourFormat } from './utils.js';

import 'swiper/swiper-bundle.css';

export default {
  name: 'TimePicker',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swipers: [
        {
          list: Array.from({ length: this.is12HourFormat() ? 12 : 24 }, (_, i) =>
            i.toString().padStart(2, '0')
          ),
          initialSlide: 7,
          loop: true,
        },
        {
          list: Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')),
          initialSlide: 30,
          loop: true,
        },
        {
          list: this.is12HourFormat() ? ['AM', 'PM'] : [],
          initialSlide: 0,
          loop: false,
        },
      ],
    };
  },
  methods: {
    is12HourFormat,
    onSlideChange() {
      console.log('changed');
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
.swiper-slide-active {
  @apply opacity-100;
}
</style>