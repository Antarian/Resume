import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinitaurusPart4Page } from './minitaurus-part4.page';

describe('MinitaurusPart4Page', () => {
  let component: MinitaurusPart4Page;
  let fixture: ComponentFixture<MinitaurusPart4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinitaurusPart4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinitaurusPart4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
