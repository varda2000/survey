import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { SurveyComponent } from './core/survey/survey.component';
import { SurveyAddComponent } from './core/survey-add/survey-add.component';
import { SurveyDetailsComponent } from './core/survey-details/survey-details.component';
import { SurveyEditComponent } from './core/survey-edit/survey-edit.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { QuestionComponent } from './core/question/question.component';
import {ApiService} from './shared/services/api.service';
import {CheckboxModule, DropdownModule, InputTextModule, RadioButtonModule, SliderModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { QuestionRowComponent } from './core/question-row/question-row.component';
import { QuestionAreaComponent } from './core/question-area/question-area.component';
import { QuestionRadioComponent } from './core/question-radio/question-radio.component';
import { QuestionCheckComponent } from './core/question-check/question-check.component';
import { QuestionRangeComponent } from './core/question-range/question-range.component';




@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveyAddComponent,
    SurveyDetailsComponent,
    SurveyEditComponent,
    QuestionComponent,
    QuestionRowComponent,
    QuestionAreaComponent,
    QuestionRadioComponent,
    QuestionCheckComponent,
    QuestionRangeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    DropdownModule,
    BrowserAnimationsModule,
    InputTextModule,
    RadioButtonModule,
    CheckboxModule,
    SliderModule,
    InputTextModule,
    DropdownModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
