import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../shared/services/api.service';
import {SurveyQuestion} from '../../../interfaces/survey-question';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.scss']
})
export class SurveyDetailsComponent implements OnInit {

  survey: any;
  public addQuestions: boolean;
  public questions: SurveyQuestion[];
  public questionNumber: number;
  public surveyId: string;
  public showList: boolean;


  constructor(public rest: ApiService, private route: ActivatedRoute, private router: Router) {
    this.addQuestions = false;
    this.questions = [];
    this.surveyId = '';
    this.showList = false;
    this.rest.get('survey', this.route.snapshot.params.id).subscribe(data => {
      if (!isNullOrUndefined(data)) {
        console.log(data);
        this.survey = data;
        this.questions.push(this.survey.surveyQuestions);
        console.log('this.questions', this.questions);
        this.questionNumber = this.questions.length;
      }

    });


  }

  ngOnInit() {


    this.surveyId = this.route.snapshot.params.id;

  }

  public buildSurvey() {
    this.showList = false;

    this.questionNumber = 1;

  }

  public continueSurvey() {
    this.showList = true;
    this.questionNumber += 1;
    this.addQuestions = true;
  }


}
