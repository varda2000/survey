import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../shared/services/api.service';

@Component({
  selector: 'question-radio',
  templateUrl: './question-radio.component.html',
  styleUrls: ['./question-radio.component.scss']
})
export class QuestionRadioComponent implements OnInit {

  public options: any[];
  public element: string
;  constructor(public rest:ApiService) { }

  ngOnInit() {
  }

  add(option: string): void {
    this.options = undefined;
    option = option.trim();
    if (!option) { return; }


    const newOption: any = { name } as Hero;
    this.rest.add(newOption)
      .subscribe(optionn => this.options.push(option));
  }

}
