import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
// Components
import Home from '@/views/Home.vue';
// Types
import { QuizResponse } from '@/types/quiz.d';
// Services
import { getAllQuizzes } from '@/services/quiz-service';
// Fake Data
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { quizzes as quizzesData } from '@/data/database';

interface State {
  isLogged: boolean;
  quizzes: QuizResponse[];
}
const store = createStore({
  state(): State {
    return {
      isLogged: true,
      quizzes: quizzesData,
    };
  },
  mutations: {
    SET_QUIZZES(state, payload: QuizResponse[]): void {
      (state as State).quizzes = payload;
    },
  },
  actions: {
    async getAllQuizes({ commit }): Promise<void> {
      const quizzes: QuizResponse[] = await getAllQuizzes();
      commit('SET_QUIZZES', quizzes);
    },
  },
});

const wrapper = shallowMount(Home, {
  global: {
    plugins: [store],
    stubs: ['router-view'],
  },
});

describe('Test in component Home.vue', (): void => {
  it('Match with snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('Components (QuizComponent) are mounted correctlty and are two tests', (): void => {
    expect(wrapper.find('quiz-component-stub').exists()).toBeTruthy();
    expect(wrapper.findAll('quiz-component-stub').length).toBe(2);
  });
  it('Called action (getAllQuizes) in mounted', async (): Promise<void> => {
    const getNewsSpy = jest.spyOn<any, any>(Home.methods, 'getAllQuizes');
    shallowMount(Home, {
      global: {
        plugins: [store],
        stubs: ['router-view'],
      },
    });
    expect(getNewsSpy).toHaveBeenCalled();
  });
});
