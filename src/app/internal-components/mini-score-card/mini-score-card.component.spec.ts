import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniScoreCardComponent } from './mini-score-card.component';

describe('MiniScoreCardComponent', () => {
  let component: MiniScoreCardComponent;
  let fixture: ComponentFixture<MiniScoreCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniScoreCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniScoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
