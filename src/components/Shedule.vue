<template lang="pug">
  .shedule
    Notes
    Weeks.weeks
</template>

<script>
import Notes from '@/components/Notes'
import Weeks from '@/components/Weeks'

export default {
  name: 'Shedule',
  components: {
    Notes,
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