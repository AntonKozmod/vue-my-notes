<template lang="pug">
  .home
    Shedule
</template>

<script>
import Shedule from '@/components/Shedule.vue'

export default {
  name: 'Home',
  components: {
    Shedule
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    align-content: center; 
    justify-content: center;
    background: #EFF6FD;
  }
  
</style>