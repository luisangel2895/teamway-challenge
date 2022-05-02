<template lang="pug">
.result
  .result__title Good Job!
  .result__trophy
    img(src="@/assets/result/trophy.svg")
    .result__trophy-text Awesome you finished the test
    button(@click="goReview") Check Your Answears
  .result__result {{resultQuiz.title}}
  .result__text {{resultQuiz.text}}
  .result__button
    button(@click="closeAll") Done
    .button-share
      img(src="@/assets/result/share.svg")

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapState, mapMutations, mapActions } from 'vuex';
// Types
import { Alternative, Quiz } from '@/types/quiz.d';

@Options({
  computed: mapState(['answearsQuiz', 'currentQuiz', 'resultQuiz']),
  methods: {
    ...mapMutations(['RESET_ANSWEAR_QUIZ']),
    ...mapActions(['getAllQuizzesResponses', 'getQuizResponse']),
  },
})
export default class Result extends Vue {
  answearsQuiz!: Alternative[];

  currentQuiz!: Quiz;

  RESET_ANSWEAR_QUIZ!: (payload: Alternative[]) => void;

  getAllQuizzesResponses!: () => Promise<void>;

  getQuizResponse!: (idQuiz: string) => Promise<void>;

  closeAll(): void {
    console.log('QUIZ -> ', this.currentQuiz);
    console.log('ANSWERS -> ', this.answearsQuiz);
    this.RESET_ANSWEAR_QUIZ([]);
    this.$router.push('/');
  }

  goReview(): void {
    this.$router.push('/review');
  }

  async mounted(): Promise<void> {
    await this.getAllQuizzesResponses();
    await this.getQuizResponse(this.currentQuiz.id);
  }
}
</script>

<style lang="scss" scoped>
.result {
  width: 100%;
  min-height: 100vh;
  position: absolute;
  z-index: 20;
  background-color: $white_color;
  font-family: $text_font;

  &__title {
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 2.4rem;
    font-weight: 600;
    color: $black_color;
  }

  &__trophy {
    width: 90%;
    margin: auto;
    padding: 20px;
    text-align: center;
    background-color: $pink_color;
    border-radius: 20px;

    img {
      width: 70%;
    }

    &-text {
      font-size: 1.6rem;
      font-weight: 600;
      color: $white_color;
    }

    button {
      margin-top: 20px;
      padding: 20px 25px;
      border-radius: 20px;
      border: none;
      background-color: rgba(255, 255, 255, 0.3);
      color: $white_color;
      font-size: 1.6rem;
      font-weight: 600;
    }

    button:active {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }

  &__result {
    width: 70%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    color: $black_color;
  }

  &__text {
    width: 90%;
    margin: auto;
    padding-bottom: 120px;
    font-size: 1.4rem;
    color: $black_color;
  }

  &__button {
    width: 450px;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    border-top: 1px solid $grey_color_2;
    background-color: $white_color;

    button {
      border: none;
      width: 70%;
      padding: 20px;
      margin-right: 20px;
      font-size: 1.6rem;
      font-weight: 600;
      color: $white_color;
      border-radius: 20px;
      background-color: $primary_color;
    }
    button:active {
      background-color: hsl(247, 68%, 58%);
    }
    .button-share {
      border: 1px solid $grey_color_2;
      padding: 10px;
      border-radius: 15px;
    }
  }
}
@media (min-width: 450px) {
  .result {
    max-width: 450px;
  }
}
</style>
