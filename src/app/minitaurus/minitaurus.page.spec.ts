import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinitaurusPage } from './minitaurus.page';

describe('MinitaurusPage', () => {
  let component: MinitaurusPage;
  let fixture: ComponentFixture<MinitaurusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinitaurusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinitaurusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
