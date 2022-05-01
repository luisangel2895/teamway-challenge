import {
  getAllQuizzes,
  getQuizzesDetail,
  getQuizesService,
  getQuizResponses,
} from '@/services/quiz-service';
// Types
import { Quiz, QuizResponse, Response } from '@/types/quiz.d';
// Fake Data
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { allQuizzes, quizzes, responses } from '@/data/database';

describe('Quiz Services', (): void => {
  //    Testing getAllQuizzes service
  it('Testing service => GET/All Quizzes', async () => {
    const quizzesReceived: QuizResponse[] = await getAllQuizzes();
    expect(quizzesReceived).toEqual(expect.any(Array));
    expect(quizzesReceived).toEqual(allQuizzes);
  });
  //   Testing getQuizzesDetail service
  it('Testing service => GET/All Quizzes Detail', async () => {
    const quizzesDetailReceived: Quiz[] = await getQuizzesDetail();
    expect(quizzesDetailReceived).toEqual(expect.any(Array));
    expect(quizzesDetailReceived).toEqual(quizzes);
  });
  //   Testing getQuizesService service
  it('Testing service => GET/Quiz', async () => {
    const quizDetailReceived: Quiz | undefined = await getQuizesService(
      'test-math',
    );
    expect(quizDetailReceived).toEqual(expect.any(Object));
    expect(quizDetailReceived).toEqual(quizzes[1]);
  });
  //   Testing getQuizResponses service
  it('Testing service => GET/Quiz Responses', async () => {
    const quizResponsesReceived: Response[] = await getQuizResponses();
    expect(quizResponsesReceived).toEqual(expect.any(Array));
    expect(quizResponsesReceived).toEqual(responses);
  });
});
