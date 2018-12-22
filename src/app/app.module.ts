import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { SurveyComponent } from './survey/survey.component';
import { SurveyAddComponent } from './survey-add/survey-add.component';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';
import { SurveyEditComponent } from './survey-edit/survey-edit.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { SurveyPagesComponent } from './survey/survey-pages/survey-pages.component';




@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveyAddComponent,
    SurveyDetailsComponent,
    SurveyEditComponent,
    SurveyPagesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
