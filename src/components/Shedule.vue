<template lang="pug">
  .shedule
    Todos(:selectedWeek="selectedWeek")
    Weeks.weeks(v-bind:selectedWeek.sync="selectedWeek")
</template>

<script>
import Todos from '@/components/Todos'
import Weeks from '@/components/Weeks'

export default {
  name: 'Shedule',
  data() {
    return {
      selectedWeek: 'пн'
    }
  },
  components: {
    Todos,
    Weeks
  }
}
</script>

<style lang="scss" scoped>
  .shedule {
    display: flex;
    align-items: center;
    .weeks {
      margin-left: 50px;
    }
  }
</style>