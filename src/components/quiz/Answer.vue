<template lang="pug">
.answer
  .answer__number
    .answer__number-circle {{question.id}}
  .answer__response
    .answer__response-question {{question.question}}
    .answer__response-alternative {{answer.id}}. {{answer.alternative}}
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    answer: {
      type: Object,
    },
    question: {
      type: Object,
    },
  },
})
export default class Answer extends Vue {}
</script>

<style lang="scss" scoped>
.answer {
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px 0px;

  &__number {
    &-circle {
      width: 32px;
      height: 32px;
      margin: 0px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $white_color;
      border-radius: 100%;
      border: 1px solid $grey_color_2;
      font-size: 1.6rem;
      font-weight: 600;
      color: $primary_color;
    }
  }

  &__response {
    margin: 0px 20px 0px 0px;

    &-question {
      font-size: 1.4rem;
      font-weight: 600;
      color: $black_color;
    }

    &-alternative {
      font-size: 1.4rem;
      color: $grey_color_2;
    }
  }
}
</style>
