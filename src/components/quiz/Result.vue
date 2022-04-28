<template lang="pug">
.result
  .result__title Good Job!
  .result__trophy
    img(src="@/assets/result/trophy.svg")
  .result__subtitle Your Answears
  .result__answears {{answearsQuiz}}
  button(@click="closeAll") close
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapState, mapMutations } from 'vuex';
// Types
import { Alternative, Quiz } from '@/types/quiz.d';

@Options({
  computed: mapState(['answearsQuiz', 'currentQuiz']),
  methods: mapMutations(['RESET_ANSWEAR_QUIZ']),
})
export default class Result extends Vue {
  answearsQuiz!: Alternative[];

  currentQuiz!: Quiz;

  RESET_ANSWEAR_QUIZ!: (payload: Alternative[]) => void;

  closeAll(): void {
    console.log('QUIZ -> ', this.currentQuiz);
    console.log('ANSWERS -> ', this.answearsQuiz);
    this.RESET_ANSWEAR_QUIZ([]);
    this.$router.push({ name: 'Home' });
  }
}
</script>

<style lang="scss" scoped>
.result {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 20;
  display: flex;
  flex-direction: column;
  background-color: $white_color;
}
</style>
