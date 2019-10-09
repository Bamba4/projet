import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphonePage } from './smartphone.page';

describe('SmartphonePage', () => {
  let component: SmartphonePage;
  let fixture: ComponentFixture<SmartphonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartphonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
