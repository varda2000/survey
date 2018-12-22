import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../shared/services/api.service';

@Component({
  selector: 'survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.scss']
})
export class SurveyDetailsComponent implements OnInit {

  survey: any;


  constructor(public rest: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getSurvey('survey', this.route.snapshot.params.id).subscribe((data: {}) => {
      console.log(data);
      this.survey = data;
    });
  }

}
