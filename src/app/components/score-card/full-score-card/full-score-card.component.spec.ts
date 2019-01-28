import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScoreCardComponent } from './full-score-card.component';

describe('FullScoreCardComponent', () => {
  let component: FullScoreCardComponent;
  let fixture: ComponentFixture<FullScoreCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullScoreCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullScoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
