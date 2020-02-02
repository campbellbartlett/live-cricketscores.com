import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InningGraphComponent } from './inning-graph.component';

describe('InningGraphComponent', () => {
  let component: InningGraphComponent;
  let fixture: ComponentFixture<InningGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InningGraphComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InningGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
