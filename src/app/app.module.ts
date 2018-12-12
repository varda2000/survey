import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { SurveyComponent } from './survey/survey.component';
import { SurveyAddComponent } from './survey-add/survey-add.component';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';
import { SurveyEditComponent } from './survey-edit/survey-edit.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'survey',
    component: SurveyComponent,
    data: { title: 'רשימת סקרים' }
  },
  {
    path: 'survey-details/:id',
    component: SurveyDetailsComponent,
    data: { title: 'פרטי הסקר' }
  },
  {
    path: 'survey-add',
    component: SurveyAddComponent,
    data: { title: 'הוספת סקר' }
  },
  {
    path: 'survey-edit/:id',
    component: SurveyEditComponent,
    data: { title: 'עריכת סקר' }
  },
  { path: '',
    redirectTo: '/survey',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveyAddComponent,
    SurveyDetailsComponent,
    SurveyEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
