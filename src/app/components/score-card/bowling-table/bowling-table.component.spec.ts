import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlingTableComponent } from './bowling-table.component';

describe('BowlingTableComponent', () => {
  let component: BowlingTableComponent;
  let fixture: ComponentFixture<BowlingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BowlingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
