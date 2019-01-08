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




@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveyAddComponent,
    SurveyDetailsComponent,
    SurveyEditComponent,
    QuestionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
