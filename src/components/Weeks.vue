<template lang="pug">
  .weeks
    .weeks__item(v-for="week in weeks" :key="week" :class="[week === selectedWeek ? 'weeks__item_selected' : '']" @click="$emit('update:selectedWeek', week)") {{ week }}
</template>

<script>

export default {
  name: 'Weeks',
  props: {
    selectedWeek: String
  },
  data() {
    return {
      weeks: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
    }
  }
}
</script>

<style lang="scss" scoped>
  .weeks {
    width: 120px;
    height: 225px;
    background: white;
    display: flex;
    flex-direction: column;
    &__item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__item_selected {
      background: #F8F8F9;
    }
  }
</style>