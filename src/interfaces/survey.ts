import {Page} from './page';
import {SurveyQuestion} from './survey-question';


export interface Survey {
  name?: string;
  userName?: string;
  dateUpdating?: string;
  Pages?: number;
  surveyQuestions: SurveyQuestion[];
}
