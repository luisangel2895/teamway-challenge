import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
// Components
import Question from '@/components/quiz/Question.vue';
// Types
import { Alternative } from '@/types/quiz.d';
// Fake Data
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { quizzes } from '@/data/database';

interface State {
  alternativeSelected: Alternative;
  percentQuiz: number;
  answearsQuiz: Alternative[];
}
const store = createStore({
  state(): State {
    return {
      alternativeSelected: {} as Alternative,
      percentQuiz: 0,
      answearsQuiz: [] as Alternative[],
    };
  },
  mutations: {
    UPDATE_ALTERNATIVE_SELECTED(state, payload: Alternative): void {
      (state as State).alternativeSelected = payload;
    },
    UPDATE_PERCENT_QUIZ(state, payload: number): void {
      (state as State).percentQuiz = payload;
    },
    ADD_ANSWER_QUIZ(state, payload: Alternative): void {
      (state as State).answearsQuiz.push(payload);
    },
  },
});

const wrapper = shallowMount(Question, {
  global: {
    plugins: [store],
  },
  props: {
    question: quizzes[0].questions[0],
    total: 14,
  },
});

describe('Test in component Question.vue', (): void => {
  it('Match with snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('Received the property  quiz correctly in this component', (): void => {
    expect(wrapper.find('.question-number').text()).toBe('QUESTION 1 OF 14');
    expect(wrapper.find('.question-question').text()).toBe(
      "You're really busy at work and a colleague is telling you their life story and personal woes. You:",
    );
  });
  it('Each question should have 4 alternatives', (): void => {
    expect(wrapper.findAll('alternative-stub').length).toBe(4);
  });
  it('Next button is disable by default', async (): Promise<void> => {
    // by default is disabled
    expect(wrapper.vm.disableNext).toBe(true);
    expect(wrapper.find('button').attributes('disabled')).toBe('');
  });
});
