import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../shared/services/api.service';
import {Survey} from '../../interfaces/survey';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'survey-edit',
  templateUrl: './survey-edit.component.html',
  styleUrls: ['./survey-edit.component.scss']
})
export class SurveyEditComponent implements OnInit {

  @Input() surveyData = {} as Survey;

  public surveyId: any;

  constructor(public rest: ApiService, private route: ActivatedRoute, private router: Router) {


  }

  ngOnInit() {
    this.rest.getSurvey('survey', this.route.snapshot.params.id).subscribe((data: {}) => {
      console.log(data);
      this.surveyData = data;
    });
  }

  updateSurvey() {
    const id = this.route.snapshot.params.id;
    this.rest.updateSurvey('survey', id, this.surveyData).subscribe((result) => {
      if (!isNullOrUndefined(result)) {
        this.surveyId = result.id;
        this.router.navigate(['/survey-details/' + result.id]);
      }
    }, (err) => {
      console.log(err);
    });

  }

  gotoNewSuveyPages() {
    this.router.navigate(['/survey-pages/']);
  }

}
