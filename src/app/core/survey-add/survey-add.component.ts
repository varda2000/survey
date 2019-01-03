import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../shared/services/api.service';
import {Survey} from '../../../interfaces/survey';


@Component({
  selector: 'survey-add',
  templateUrl: './survey-add.component.html',
  styleUrls: ['./survey-add.component.scss']
})
export class SurveyAddComponent implements OnInit {

  @Input() surveyData = {} as Survey;


  constructor(public rest: ApiService, private route: ActivatedRoute, private router: Router) {


    console.log('this.surveyData', this.surveyData);

  }

  ngOnInit() {
    this.surveyData.dateUpdating = new Date().toDateString();
    this.surveyData.Pages = 0;
  }

  addSurvey() {
    this.rest.add('survey', this.surveyData).subscribe((result) => {

      this.router.navigate(['/survey-details/' + result.id]);
    },
      (err) => {
      console.log(err);
    });
  }


}
