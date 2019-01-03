import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent implements OnInit {
  @Input() questionNumber: number;
  public theQuestion: string;

  constructor() {
    this.theQuestion = '';
  }

  ngOnInit() {
  }

}
