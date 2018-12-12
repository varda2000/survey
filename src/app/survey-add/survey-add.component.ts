import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../shared/services/api.service';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'survey-add',
  templateUrl: './survey-add.component.html',
  styleUrls: ['./survey-add.component.scss']
})
export class SurveyAddComponent implements OnInit {

  @Input() surveyData = {survey_name: '', survey_desc: '', survey_price: 0};


  constructor(public rest: ApiService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
  }

  addSurvey() {
    this.rest.addSurvey('survey', this.surveyData).subscribe((result) => {
       this.router.navigate(['/survey-details/' + result.id]);
    }, (err) => {
      console.log(err);
    });
  }


}
