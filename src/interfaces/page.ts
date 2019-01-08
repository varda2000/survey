import {SurveyQuestion} from './survey-question';

export interface Page {
  pageNumber?: number;
  pageTitle?: string;
  pageDescription?: string;
  questions: SurveyQuestion[];
}
