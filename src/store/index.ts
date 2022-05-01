import { createStore } from 'vuex';
import {
  getQuizesService,
  getAllQuizzes,
  getQuizResponses,
} from '@/services/quiz-service';
// Types
import {
  Alternative,
  Quiz,
  QuizResponse,
  Response,
  Result,
} from '@/types/quiz.d';

export default createStore({
  state: {
    isLogged: false,
    currentFragmentLoader: 1,
    pastFragmentLoader: 1,
    closeFragment1: false,
    closeFragment2: false,
    closeFragment3: false,
    currentView: 'Home',
    // Quiz
    quizzes: [] as QuizResponse[],
    currentQuiz: {} as Quiz,
    alternativeSelected: {} as Alternative | null,
    percentQuiz: 0,
    answearsQuiz: [] as Alternative[],
    responsesQuizzes: [] as Response[],
    responseQuiz: {} as Response,
    resultQuiz: {} as Result,
  },
  mutations: {
    STATUS_LOGIN(state, payload): void {
      state.isLogged = payload;
    },
    SET_CURRENT_FRAGMENT_LOADER(state, payload): void {
      state.currentFragmentLoader = payload;
    },
    SET_PAST_FRAGMENT_LOADER(state, payload): void {
      state.pastFragmentLoader = payload;
    },
    STATUS_CLOSE_FRAGMENT_1(state, payload): void {
      state.closeFragment1 = payload;
    },
    STATUS_CLOSE_FRAGMENT_2(state, payload): void {
      state.closeFragment2 = payload;
    },
    STATUS_CLOSE_FRAGMENT_3(state, payload): void {
      state.closeFragment3 = payload;
    },
    SET_CURRENT_VIEW(state, payload): void {
      state.currentView = payload;
    },
    // QUIZ
    SET_QUIZZES(state, payload: QuizResponse[]): void {
      state.quizzes = payload;
    },
    SET_CURRENT_QUIZ(state, payload: Quiz): void {
      state.currentQuiz = payload;
    },
    UPDATE_ALTERNATIVE_SELECTED(state, payload: Alternative): void {
      state.alternativeSelected = payload;
    },
    UPDATE_PERCENT_QUIZ(state, payload: number): void {
      state.percentQuiz = payload;
    },
    ADD_ANSWER_QUIZ(state, payload: Alternative): void {
      state.answearsQuiz.push(payload);
    },
    RESET_ANSWEAR_QUIZ(state, payload: Alternative[]): void {
      state.answearsQuiz = payload;
    },
    SET_RESPONSES_QUIZZES(state, payload: Response[]): void {
      state.responsesQuizzes = payload;
    },
    SET_RESULT_QUIZ(state, payload: Result): void {
      state.resultQuiz = payload;
    },
  },
  actions: {
    // I put login as action because usually is an async function
    updateStatusLogin({ commit }, payload): void {
      commit('STATUS_LOGIN', payload);
    },
    // Get basic information of all quizzes
    async getAllQuizes({ commit }): Promise<void> {
      const quizzes: QuizResponse[] = await getAllQuizzes();
      commit('SET_QUIZZES', quizzes);
    },
    // Get detail of quizz selected
    async getQuizes({ commit }, payload: string): Promise<void> {
      const quiz: Quiz | undefined = await getQuizesService(payload);
      commit('SET_CURRENT_QUIZ', quiz);
    },
    async getAllQuizzesResponses({ commit }): Promise<void> {
      const responses: Response[] = await getQuizResponses();
      commit('SET_RESPONSES_QUIZZES', responses);
    },
    async getQuizResponse({ commit, state }, idQuiz: string): Promise<void> {
      const quizResponses = state.responsesQuizzes.find(
        (quizRes: Response) => quizRes.quiz === idQuiz,
      );
      // Calculate the result
      let numberIntroverts = 0;
      let numberExtroverts = 0;
      let goodAnswersMath = 0;
      let badAnswersMath = 0;
      let responseQuiz: Result | undefined;

      state.answearsQuiz.forEach((alternative: Alternative) => {
        if (alternative.id === 'a' || alternative.id === 'b') {
          numberIntroverts += 1;
          goodAnswersMath += 1;
        }
        if (alternative.id === 'c' || alternative.id === 'd') {
          numberExtroverts += 1;
          badAnswersMath += 1;
        }
      });
      if (idQuiz === 'test-personality') {
        if (numberIntroverts > numberExtroverts) {
          responseQuiz = quizResponses?.results.find(
            (response: Result) => response.id === 'introvert',
          );
        } else {
          responseQuiz = quizResponses?.results.find(
            (response: Result) => response.id === 'extrovert',
          );
        }
      } else if (idQuiz === 'test-math') {
        if (goodAnswersMath > badAnswersMath) {
          responseQuiz = quizResponses?.results.find(
            (response: Result) => response.id === 'good',
          );
        } else {
          responseQuiz = quizResponses?.results.find(
            (response: Result) => response.id === 'bad',
          );
        }
      }

      commit('SET_RESULT_QUIZ', responseQuiz);
    },
  },
  modules: {},
});
