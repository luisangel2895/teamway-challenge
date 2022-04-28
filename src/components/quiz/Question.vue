<template lang="pug">
.question
  .question-container
    .question-number QUESTION {{question.id}} OF {{total}}
    .question-question {{question.question}}
    .question-alternatives
        Alternative(v-for="(alternative, index) in question.alternatives"
            :key="index" :alternative="alternative")
  .question-button
    button(@click="nextQuestion" :disabled="disableNext") Next
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapState, mapMutations } from 'vuex';
// Components
import Alternative from '@/components/quiz/Alternative.vue';
// Types
import {
  Question as QuestionType,
  Alternative as AlternativeType,
} from '@/types/quiz.d';

@Options({
  props: {
    question: {
      type: Object,
    },
    total: {
      type: Number,
    },
  },
  watch: {
    alternativeSelected(value: AlternativeType) {
      if (!value.id) {
        this.disableNext = true;
      } else {
        this.disableNext = false;
      }
    },
  },
  computed: mapState(['alternativeSelected']),
  methods: mapMutations([
    'UPDATE_ALTERNATIVE_SELECTED',
    'UPDATE_PERCENT_QUIZ',
    'ADD_ANSWER_QUIZ',
  ]),
  components: {
    Alternative,
  },
})
export default class Question extends Vue {
  question!: QuestionType;

  total!: number;

  alternativeSelected!: AlternativeType;

  disableNext = true;

  UPDATE_ALTERNATIVE_SELECTED!: (status: AlternativeType | null) => void;

  UPDATE_PERCENT_QUIZ!: (percernt: number) => void;

  ADD_ANSWER_QUIZ!: (answerar: AlternativeType) => void;

  nextQuestion(): void {
    // update the percent
    const percent = Number(
      ((Number(this.question.id) / this.total) * 100).toFixed(1),
    );
    this.UPDATE_PERCENT_QUIZ(percent);

    const alternativeVoid: AlternativeType = {
      id: '',
      alternative: '',
    };
    this.$emit('next', this.question.id);
    // send alternative
    this.ADD_ANSWER_QUIZ(this.alternativeSelected);
    // clean the alternatives
    this.UPDATE_ALTERNATIVE_SELECTED(alternativeVoid);
  }
}
</script>

<style lang="scss" scoped>
.question {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: $white_color;
  border-radius: 20px;

  &-container {
    height: 92%;
  }

  &-number {
    margin-top: 10px;
    font-size: 1.4rem;
    font-weight: 600;
    color: $grey_color_2;
  }

  &-question {
    margin-top: 10px;
    color: $black_color;
    font-size: 2rem;
    font-weight: 600;
  }

  &-button {
    height: 8%;
    button {
      width: 100%;
      border: none;
      background-color: $primary_color;
      border-radius: 20px;
      padding: 20px;
      font-size: 1.6rem;
      font-weight: 600;
      color: $white_color;
    }
    button:active {
      background-color: hsl(247, 68%, 58%);
    }
    button:disabled {
      background-color: hsl(247, 68%, 75%);
    }
  }
}
</style>
