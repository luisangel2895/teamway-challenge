// Types
import { Quiz, QuizResponse, Response } from '@/types/quiz.d';
// Fake Data
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { allQuizzes, quizzes, responses } from '@/data/database';

export const getAllQuizzes = async (): Promise<QuizResponse[]> => allQuizzes;

export const getQuizzesDetail = async (): Promise<Quiz[]> => quizzes;

export const getQuizesService = async (
  id: string,
): Promise<Quiz | never | undefined> => {
  try {
    const quizzesDetail: Quiz[] = await getQuizzesDetail();
    const quizId: Quiz | undefined = quizzesDetail.find(
      (quiz: Quiz) => quiz.id === id,
    );
    return quizId;
  } catch (e) {
    throw new Error(`We cant get the question of the test with id: ${id}`);
  }
};

export const getQuizResponses = async (): Promise<Response[]> => {
  const responsesData: Response[] = await responses;
  return responsesData;
};
