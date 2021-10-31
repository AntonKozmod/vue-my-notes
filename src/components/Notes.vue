<template lang="pug">
  .notes
    .notes__star
    .notes__list
      p
        | Проверка
    .notes__input-area
      .notes__input-area__time
        input(v-model="time")
      input.notes__input-area__note(v-model="note")
      button.notes__input-area__but-add(@click.stop="onClickButton") +
</template>

<script>

export default {
  name: 'Notes',
  data() {
    return {
      time: '',
      note: ''
    }
  },
  methods: {
    onClickButton(e) {
      console.log('onClickButton', e)
    }
  }
}
</script>

<style lang="scss" scoped>
  .notes {
    width: 400px;
    height: 250px;
    background: white;
    border: 1px solid #DEDEE1;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 30px;
    display: grid;
    grid: 40px auto 40px / auto;
    &__star {
      grid-row: 1;
    }
    &__list {
      grid-row: 2;
    }
    &__input-area {
      grid-row: 3;
      display: flex;
      &__time {
        flex-basis: 80px;
      }
      &__note {
        flex: 1;
        margin: 0 10px;
      }
      &__but-add {
        flex-basis: 40px;
      }
    }
  }
</style>