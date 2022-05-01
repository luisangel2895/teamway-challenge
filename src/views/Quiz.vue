<template lang="pug">
.quiz-page
  .container-progress
    .container-progress__profile
      img(src="@/assets/home/profile.jpg")
    .container-progress__bar
      #bar.container-progress__bar-filled
    .container-progress__percent
      .container-progress__percent-box {{percentQuiz}} %
  .container-questions
    Question(:question="currentQuiz.questions[id-1]" @next="handleQuestion"
      :total="currentQuiz.questions.length")
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapState } from 'vuex';
// Components
import Question from '@/components/quiz/Question.vue';
// Types
import { Quiz as QuizType } from '@/types/quiz.d';

@Options({
  computed: {
    ...mapState(['currentQuiz', 'percentQuiz']),
  },
  components: {
    Question,
  },
})
export default class Quiz extends Vue {
  id = 1;

  currentQuiz!: QuizType;

  percentQuiz!: number;

  handleQuestion(value: string): void {
    if (this.id >= this.currentQuiz.questions.length) {
      this.$router.push({ name: 'Result' });
    } else {
      this.id = Number(value) + 1;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      document.getElementById('bar').style.width = `${this.percentQuiz}%`;
    }
  }
}
</script>

<style lang="scss" scoped>
.quiz-page {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 20;
  display: flex;
  flex-direction: column;
  background-color: $primary_color;
  font-family: $text_font;
}
.container-progress {
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__profile {
    width: 25%;
    text-align: center;
    img {
      width: 50px;
      border-radius: 100%;
    }
  }

  &__bar {
    width: 50%;
    height: 5px;
    background-color: rgba(255, 255, 255, 0.3);
    text-align: left;

    &-filled {
      width: 0%;
      height: 5px;
      background-color: rgb(255, 255, 255);
    }
  }

  &__percent {
    width: 25%;
    text-align: center;
    &-box {
      width: 50px;
      margin: auto;
      padding: 10px 0px 10px 0px;
      background-color: #ff9b57;
      font-size: 1.2rem;
      font-weight: 600;
      color: white;
      border-radius: 10px;
    }
  }
}
.container-questions {
  height: 90%;
  padding: 0px 10px 10px 10px;
}
</style>
