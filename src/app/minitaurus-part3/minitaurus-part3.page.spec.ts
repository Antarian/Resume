import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinitaurusPart3Page } from './minitaurus-part3.page';

describe('MinitaurusPart3Page', () => {
  let component: MinitaurusPart3Page;
  let fixture: ComponentFixture<MinitaurusPart3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinitaurusPart3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinitaurusPart3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
