import {QuestionType} from './question-type';


export interface SurveyQuestion {
  questionNumber?: string;
  questionType?: QuestionType;
  question?: string;
  surveyNo: number;

}
