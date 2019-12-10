import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicAwsDeploymentPage } from './ionic-aws-deployment.page';

describe('IonicAwsDeploymentPage', () => {
  let component: IonicAwsDeploymentPage;
  let fixture: ComponentFixture<IonicAwsDeploymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicAwsDeploymentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicAwsDeploymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
