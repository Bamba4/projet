import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSmartphonePage } from './detail-smartphone.page';

describe('DetailSmartphonePage', () => {
  let component: DetailSmartphonePage;
  let fixture: ComponentFixture<DetailSmartphonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSmartphonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSmartphonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
