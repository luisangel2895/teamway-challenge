import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
// Components
import Result from '@/components/quiz/Result.vue';
// Types
import {
  Alternative,
  Quiz,
  Result as ResultType,
  Response,
} from '@/types/quiz.d';
// Services
import { getQuizResponses } from '@/services/quiz-service';
// Database
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { quizzes, responses as ResponsesData } from '@/data/database';
// Mocks
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { responsesPersonalityMock } from '../../mocks/responses';

interface State {
  currentQuiz: Quiz;
  answearsQuiz: Alternative[];
  resultQuiz: ResultType;
  responsesQuizzes: Response[];
}
const store = createStore({
  state(): State {
    return {
      currentQuiz: quizzes[0],
      answearsQuiz: responsesPersonalityMock as Alternative[],
      resultQuiz: {} as ResultType,
      responsesQuizzes: [] as Response[],
    };
  },
  mutations: {
    RESET_ANSWEAR_QUIZ(state, payload: Alternative[]): void {
      (state as State).answearsQuiz = payload;
    },
    SET_RESPONSES_QUIZZES(state, payload: Response[]): void {
      (state as State).responsesQuizzes = payload;
    },
    SET_RESULT_QUIZ(state, payload: ResultType): void {
      (state as State).resultQuiz = payload;
    },
  },
  actions: {
    async getAllQuizzesResponses({ commit }): Promise<void> {
      const responses: Response[] = await getQuizResponses();
      commit('SET_RESPONSES_QUIZZES', responses);
    },
    async getQuizResponse({ commit, state }, idQuiz: string): Promise<void> {
      const quizResponses = (state as State).responsesQuizzes.find(
        (quizRes: Response) => quizRes.quiz === idQuiz,
      );
      // Calculate the result
      let numberIntroverts = 0;
      let numberExtroverts = 0;
      const goodAnswersMath = 0;
      const badAnswersMath = 0;
      let responseQuiz: ResultType | undefined;

      (state as State).answearsQuiz.forEach((alternative: Alternative) => {
        if (alternative.id === 'a' || alternative.id === 'b') {
          numberIntroverts += 1;
        }
        if (alternative.id === 'c' || alternative.id === 'd') {
          numberExtroverts += 1;
        }
      });
      if (idQuiz === 'test-personality') {
        if (numberIntroverts > numberExtroverts) {
          responseQuiz = quizResponses?.results.find(
            (response: ResultType) => response.id === 'introvert',
          );
        } else {
          responseQuiz = quizResponses?.results.find(
            (response: ResultType) => response.id === 'extrovert',
          );
        }
      } else if (idQuiz === 'test-math') {
        if (goodAnswersMath > badAnswersMath) {
          responseQuiz = quizResponses?.results.find(
            (response: ResultType) => response.id === 'good',
          );
        } else {
          responseQuiz = quizResponses?.results.find(
            (response: ResultType) => response.id === 'bad',
          );
        }
      }

      commit('SET_RESULT_QUIZ', responseQuiz);
    },
  },
});

const mockRouter = {
  push: jest.fn(),
};
const wrapper = shallowMount(Result, {
  global: {
    plugins: [store],
    mocks: {
      $router: mockRouter,
    },
  },
});

describe('Test in component Result.vue', (): void => {
  it('Match with snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('Check the correct result in based of mock alternatives', (): void => {
    // This component receive information in props of personality quiz
    expect(wrapper.find('.result__title').text()).toBe('Good Job!');
    expect(wrapper.find('.result__result').text()).toBe(
      'You are more of an introvert',
    );
    expect(wrapper.find('.result__text').text()).toBe(
      ResponsesData[0].results[0].text,
    );
  });
  it('Action (getAllQuizzesResponses) is called when the component is mounted ', async (): Promise<void> => {
    const getAllQuizzesResponsesSpy = jest.spyOn<any, any>(
      Result.methods,
      'getAllQuizzesResponses',
    );
    const mockRouter2 = {
      push: jest.fn(),
    };
    shallowMount(Result, {
      global: {
        plugins: [store],
        mocks: {
          $router: mockRouter2,
        },
      },
    });
    expect(getAllQuizzesResponsesSpy).toHaveBeenCalled();
  });
  it('Go to route /review when we push the first button', (): void => {
    const $buttonReview = wrapper.findAll('button')[0];
    $buttonReview.trigger('click');
    expect(mockRouter.push).toHaveBeenCalled();
    expect(mockRouter.push).toHaveBeenCalledWith('/review');
  });
  it('When i press the button, mutation (RESET_ANSWEAR_QUIZ) is called and go to home (/)', async (): Promise<void> => {
    const resetAnswersQuizSpy = jest.spyOn<any, any>(
      Result.methods,
      'RESET_ANSWEAR_QUIZ',
    );
    const mockRouter2 = {
      push: jest.fn(),
    };
    const wrapper2 = shallowMount(Result, {
      global: {
        plugins: [store],
        mocks: {
          $router: mockRouter2,
        },
      },
    });
    const $buttonClose = wrapper2.findAll('button')[1];
    $buttonClose.trigger('click');
    // Reset the answers of the quiz
    expect(resetAnswersQuizSpy).toHaveBeenCalled();
    // Go to home
    expect(mockRouter2.push).toHaveBeenCalled();
    expect(mockRouter2.push).toHaveBeenCalledWith('/');
  });
});
