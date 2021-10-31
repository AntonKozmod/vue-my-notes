<template lang="pug">
  .shedule
    Todos
    Weeks.weeks
</template>

<script>
import Todos from '@/components/Todos'
import Weeks from '@/components/Weeks'

export default {
  name: 'Shedule',
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