import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPagesComponent } from './survey-pages.component';

describe('SurveyPagesComponent', () => {
  let component: SurveyPagesComponent;
  let fixture: ComponentFixture<SurveyPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
