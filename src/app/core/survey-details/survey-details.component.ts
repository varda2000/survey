import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../shared/services/api.service';
import {SurveyQuestion} from '../../../interfaces/survey-question';

@Component({
  selector: 'survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.scss']
})
export class SurveyDetailsComponent implements OnInit {

  survey: any;
  public addQuestions: boolean ;
  public questions: SurveyQuestion[];


  constructor(public rest: ApiService, private route: ActivatedRoute, private router: Router) {
    this.addQuestions = false;
    this.questions = [];
  }

  ngOnInit() {
    this.rest.get('survey', this.route.snapshot.params.id).subscribe(data => {
      console.log(data);
      this.survey = data;
    });
  }

  public buildSurvey() {
    this.addQuestions = true;
  }

}
