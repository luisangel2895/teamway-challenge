import component from '../../shims-vue';
<template lang="pug">
.quiz-component(:class="{'entry-left' : startComponent}" @click="goQuiz")
    .quiz-component__image
        img(src="@/assets/quiz/psico.svg")
    .quiz-component__data
        .quiz-component__data-title {{quiz.name}}
        .quiz-component__data-type
            .quiz-component__data-type-topic {{quiz.type}} -
            .quiz-component__data-type-number {{quiz.number}} Questions
    .quiz-component__icon
        img(src="@/assets/quiz/arrow.svg")
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapActions } from 'vuex';
// Types
import { QuizResponse } from '@/types/quiz.d';

@Options({
  props: {
    quiz: {
      type: Object,
      default: {},
    },
  },
  methods: mapActions(['getQuizes']),
})
export default class QuizComponent extends Vue {
  startComponent = false;

  quiz!: QuizResponse;

  getQuizes!: (id: string) => Promise<void>;

  async goQuiz(): Promise<void> {
    this.$router.push('/quiz');
    await this.getQuizes(this.quiz.id);
  }

  mounted(): void {
    this.startComponent = true;
  }
}
</script>

<style lang="scss" scoped>
.quiz-component {
  width: 100%;
  margin-top: 15px;
  padding: 10px;
  display: flex;
  align-items: center;
  border: 2px solid $grey_color_5;
  border-radius: 20px;
  font-family: $text_font;

  &__image {
    width: 25%;
    display: flex;
    justify-content: center;
    img {
      height: 100%;
    }
  }
  &__data {
    width: 65%;
    padding-left: 20px;
    &-title {
      font-size: 1.6rem;
      color: $black_color;
      font-weight: 600;
    }
    &-type {
      margin-top: 10px;
      display: flex;
      font-size: 1.2rem;
      color: $grey_color_2;
    }
  }
  &__icon {
    width: 10%;
  }
}
.entry-left {
  animation-name: entry-left;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
@keyframes entry-left {
  from {
    position: relative;
    left: -100%;
  }
  to {
    position: relative;
    left: 0px;
  }
}
</style>
