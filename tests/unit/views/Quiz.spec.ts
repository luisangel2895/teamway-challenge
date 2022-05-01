import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
// Components
import Quiz from '@/views/Quiz.vue';
// Types
import { Quiz as QuizType } from '@/types/quiz.d';
// Fake Data
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { quizzes } from '@/data/database';

interface State {
  currentQuiz: QuizType;
  percentQuiz: number;
}
const store = createStore({
  state(): State {
    return {
      currentQuiz: quizzes[0] as QuizType,
      percentQuiz: 0,
    };
  },
});

const wrapper = shallowMount(Quiz, {
  global: {
    plugins: [store],
  },
});

describe('Test in component Quiz.vue', (): void => {
  it('Match with snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('Question component mounted into this component', (): void => {
    expect(wrapper.find('question-stub').exists()).toBeTruthy();
  });
  it('Recognize correctly the number of questions of the test', (): void => {
    expect(wrapper.find('question-stub').attributes('total')).toBe('14');
  });
});
