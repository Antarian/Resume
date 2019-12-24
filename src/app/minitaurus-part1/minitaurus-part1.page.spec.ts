import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinitaurusPart1Page } from './minitaurus-part1.page';

describe('MinitaurusPart1Page', () => {
  let component: MinitaurusPart1Page;
  let fixture: ComponentFixture<MinitaurusPart1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinitaurusPart1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinitaurusPart1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
