import {Component} from '@angular/core';
import {ApiService} from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(public rest: ApiService) {
    this.rest.baseUrl = '/api';
  }
}
