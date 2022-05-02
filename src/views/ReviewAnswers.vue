<template lang="pug">
.review-answers
  .review-answers__equis-icon(@click="goBack")
    img(src="@/assets/result/equis.svg")
  .review-answers__title Review Answers
  .review-answers__subtitle Your Answers
  .review-answers__container
    Answer(v-for="(answer, index) in answearsQuiz" :key="index" :answer="answer"
    :question="currentQuiz.questions[index]")
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapState } from 'vuex';
// Components
import Answer from '@/components/quiz/Answer.vue';
// Types
import { Alternative, Quiz } from '@/types/quiz.d';

@Options({
  components: {
    Answer,
  },
  computed: mapState(['answearsQuiz', 'currentQuiz']),
})
export default class ReviewAnswers extends Vue {
  answearsQuiz!: Alternative[];

  currentQuiz!: Quiz;

  goBack(): void {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.review-answers {
  width: 100%;
  min-height: 100vh;
  position: absolute;
  z-index: 20;
  background-color: $white_color;
  font-family: $text_font;

  &__equis-icon {
    position: absolute;
    top: 30px;
    right: 20px;
  }

  &__title {
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 2.4rem;
    font-weight: 600;
    color: $black_color;
  }

  &__subtitle {
    padding: 0px 20px;
    font-size: 1.8rem;
    font-weight: 600;
    color: $black_color;
  }

  &__container {
    width: 90%;
    margin: auto;
    padding: 10px 0px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: $grey_color_5;
    border-radius: 20px;
  }
}
@media (min-width: 450px) {
  .review-answers {
    max-width: 450px;
  }
}
</style>
