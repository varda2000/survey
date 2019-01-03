import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../shared/services/api.service';

@Component({
  selector: 'survey-pages',
  templateUrl: './survey-pages.component.html',
  styleUrls: ['./survey-pages.component.scss']
})
export class SurveyPagesComponent implements OnInit {
  public totalPages: number;
  public pageNo: number;

  constructor(public rest: ApiService) {
    this.pageNo = 0;
  }

  ngOnInit() {
    this.rest.get('survey').subscribe((res) => {
      console.log('res', res);
      this.pageNo = res.pages;
    });

    this.pageNo++;
  }


}
