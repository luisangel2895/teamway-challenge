// All Quizes
export interface QuizResponse {
  id: string;
  name: string;
  type: string;
  number: number;
  image: string;
}

// Quiz Detail
export interface Alternative {
  id: string;
  alternative: string;
}
export interface Question {
  id: string;
  question: string;
  alternatives: Alternative[];
}
export interface Quiz {
  id: string;
  questions: Question[];
}

// Response
export interface Result {
  id: string;
  title: string;
  text: string;
}
export interface Response {
  quiz: string;
  results: Result[];
}
