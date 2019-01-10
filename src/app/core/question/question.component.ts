import {Component, Input, OnInit} from '@angular/core';
import {QuestionType} from '../../../interfaces/question-type';
import {SurveyQuestion} from '../../../interfaces/survey-question';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent implements OnInit {
  @Input() questionNumber: number;
  public theQuestion: string;
  public questionType: QuestionType[];
  public surveyQuestions: SurveyQuestion[];
  public selectedQuestion: QuestionType;

  constructor() {
    this.questionType = [
      {id: 1, qType: 'שורת טקסט'},
      {id: 2, qType: 'תיבת טקסט'},
      {id: 3, qType: 'בחירה מתוך אפשרויות'},
      {id: 4, qType: 'בחירה מרובה מתוך אפשרויות'},
      {id: 5, qType: 'בחירת ערך מספרי מתוך טווח'},
    ];
  }

  ngOnInit() {
  }

  onChooseQuestion(selectedQuestion: QuestionType) {
    if (selectedQuestion.id === 1) {

    }

  }
}
