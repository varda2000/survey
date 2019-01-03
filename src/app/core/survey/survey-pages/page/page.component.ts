import {Component, OnInit} from '@angular/core';
import {Page} from '../../../../../interfaces/page';
import {Survey} from '../../../../../interfaces/survey';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  public page = {} as  Page;
  public showquestion: boolean;
  public qNumber: number;

  constructor() {
    this.showquestion = false;
    this.qNumber = 0;
  }

  ngOnInit() {
    this.page.pageNumber = 1;
  }

  addQuestion() {
    this.showquestion = true;
    this.qNumber++;

  }

}
