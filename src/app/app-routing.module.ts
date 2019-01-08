import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SurveyDetailsComponent} from './core/survey-details/survey-details.component';
import {SurveyEditComponent} from './core/survey-edit/survey-edit.component';
import {SurveyComponent} from './core/survey/survey.component';
import {SurveyAddComponent} from './core/survey-add/survey-add.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'survey',
    component: SurveyComponent,
    data: {title: 'רשימת סקרים'},

  },
  {
    path: 'survey-details/:id',
    component: SurveyDetailsComponent,
    data: {title: 'פרטי הסקר'}
  },
  {
    path: 'survey-add',
    component: SurveyAddComponent,
    data: {title: 'הוספת סקר'}
  },
  {
    path: 'survey-edit/:id',
    component: SurveyEditComponent,
    data: {title: 'עריכת סקר'}
  }
  ,

  {
    path: '',
    redirectTo: '/survey',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
})

export class AppRoutingModule {
}
