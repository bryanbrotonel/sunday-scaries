<template>
  <div class="space-y-4 p-4">
    <div class="text-center space-y-2">
      <h1 class="text-3xl font-bold">{{ title }}</h1>
      <h2 class="text-lg font-medium opacity-50">{{ subtitle }}</h2>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <div>
        <TimePicker />
      </div>
      <div>
        <button
          class="rounded-full p-2 px-6 bg-yellow-500 text-blue text-indigo-950 font-medium">Save
          Changes</button>
      </div>
    </div>
  </div>
</template>

<script>
import TimePicker from './TimePicker.vue';

export default {
  name: 'TimeSelector',
  props: {
    title: String,
    subtitle: String
  },
  components: {
    TimePicker
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
