import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
// Components
import QuizComponent from '@/components/shared/QuizComponent.vue';
// Types
import { Quiz, QuizResponse } from '@/types/quiz.d';
// Services
import { getQuizesService } from '@/services/quiz-service';
// Fake Data
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { allQuizzes } from '@/data/database';

interface State {
  currentQuiz: Quiz;
}
const store = createStore({
  state(): State {
    return {
      currentQuiz: {} as Quiz,
    };
  },
  mutations: {
    SET_CURRENT_QUIZ(state, payload: Quiz): void {
      (state as State).currentQuiz = payload;
    },
  },
  actions: {
    async getQuizes({ commit }, payload: string): Promise<void> {
      const quiz: Quiz | undefined = await getQuizesService(payload);
      commit('SET_CURRENT_QUIZ', quiz);
    },
  },
});

const mockRouter = {
  push: jest.fn(),
};
const wrapper = shallowMount(QuizComponent, {
  global: {
    plugins: [store],
    stubs: ['router-view'],
    mocks: {
      $router: mockRouter,
    },
  },
  props: {
    quiz: allQuizzes[0] as QuizResponse,
  },
});

describe('Test in component QuizComponent.vue', (): void => {
  it('Match with snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('Received the property  quiz correctly in this component', (): void => {
    // This component receive information in props of personality quiz
    expect(wrapper.find('.quiz-component__data-title').text()).toBe(
      'Personality Test',
    );
    expect(wrapper.find('.quiz-component__data-type-topic').text()).toBe(
      'Psichology -',
    );
    expect(wrapper.find('.quiz-component__data-type-number').text()).toBe(
      '1 Questions',
    );
  });
  it('Action (getQuizes) is called when we clicked the component ', async (): Promise<void> => {
    const getQuizezSpy = jest.spyOn<any, any>(
      QuizComponent.methods,
      'getQuizes',
    );
    const mockRouter2 = {
      push: jest.fn(),
    };
    const wrapper2 = shallowMount(QuizComponent, {
      global: {
        plugins: [store],
        stubs: ['router-view'],
        mocks: {
          $router: mockRouter2,
        },
      },
      props: {
        quiz: allQuizzes[0] as QuizResponse,
      },
    });
    await wrapper2.find('.quiz-component').trigger('click');
    expect(getQuizezSpy).toHaveBeenCalled();
  });
  it('Go to route /quiz when we clicked the component', async (): Promise<void> => {
    const mockRouter2 = {
      push: jest.fn(),
    };
    const wrapper2 = shallowMount(QuizComponent, {
      global: {
        plugins: [store],
        stubs: ['router-view'],
        mocks: {
          $router: mockRouter2,
        },
      },
      props: {
        quiz: allQuizzes[0] as QuizResponse,
      },
    });
    await wrapper2.find('.quiz-component').trigger('click');
    expect(mockRouter2.push).toHaveBeenCalled();
    expect(mockRouter2.push).toHaveBeenCalledWith('/quiz');
  });
});
