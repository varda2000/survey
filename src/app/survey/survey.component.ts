import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {ApiService} from '../shared/services/api.service';

@Component({
  selector: 'survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})

export class SurveyComponent implements OnInit {

  surveys: any = [];

  constructor(public rest: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getSurveys();
  }

  getSurveys() {
    this.surveys = [];
    this.rest.getSurveys('survey').subscribe((data: {}) => {
      console.log(data);
      this.surveys = data;
    });
  }

  add() {
    this.router.navigate(['/survey-add']);
  }

  delete(id) {
    this.rest.deleteSurvey('survey', id)
      .subscribe(res => {
          this.getSurveys();
        }, (err) => {
          console.log(err);
        }
      );
  }

}
