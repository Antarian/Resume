import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinitaurusPart2Page } from './minitaurus-part2.page';

describe('MinitaurusPart2Page', () => {
  let component: MinitaurusPart2Page;
  let fixture: ComponentFixture<MinitaurusPart2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinitaurusPart2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinitaurusPart2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
