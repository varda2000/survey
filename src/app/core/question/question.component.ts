import {Component, Input, OnInit} from '@angular/core';
import {QuestionType} from '../../../interfaces/question-type';
import {SurveyQuestion} from '../../../interfaces/survey-question';
import {ApiService} from '../../shared/services/api.service';
import {isNullOrUndefined} from 'util';
import {Survey} from '../../../interfaces/survey';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent implements OnInit {
  @Input() questionNumber: number;
  @Input() survey: Survey;
  public question: SurveyQuestion;
  public questionType: QuestionType[];
  public selectedQuestionType: QuestionType;
  public theQuestion: string;


  constructor(public rest: ApiService) {
    this.question = {};
    this.theQuestion= '';
    this.questionType = [
      {id: 1, qType: 'שורת טקסט'},
      {id: 2, qType: 'תיבת טקסט'},
      {id: 3, qType: 'בחירה מתוך אפשרויות'},
      {id: 4, qType: 'בחירה מרובה מתוך אפשרויות'},
      {id: 5, qType: 'בחירת ערך מספרי מתוך טווח'},
    ];
    this.selectedQuestionType = {id: 0, qType: ''};

  }

  ngOnInit() {

  }

  public onChooseQuestionType(selectedQuestion: QuestionType) {
    console.log('this.question.questionType', selectedQuestion);
    this.question.questionType = selectedQuestion.id;


  }

  public goOn() {

    this.question.theQuestion = this.theQuestion;
    this.question.questionNumber = this.questionNumber;
    console.log('the question', this.theQuestion);
    this.theQuestion = '';
    this.survey.surveyQuestions[this.questionNumber - 1] = this.question;
    console.log('the survey', this.survey);
    this.rest.update('survey', this.survey.id, this.survey).subscribe(data => {
      if (!isNullOrUndefined(data)) {
        console.log('add theQuestion', data);
      }
    });
  }

  public finish(){

  }
}
