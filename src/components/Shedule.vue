<template lang="pug">
  .shedule
    Note
    Week.week
</template>

<script>
import Note from '@/components/Note'
import Week from '@/components/Week'

export default {
  name: 'Shedule',
  components: {
    Note,
    Week
  }
}
</script>

<style lang="scss" scoped>
  .shedule {
    display: flex;
    align-items: center;
    .week {
      margin-left: 50px;
    }
  }
</style>