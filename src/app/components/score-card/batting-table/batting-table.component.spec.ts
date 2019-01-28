import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattingTableComponent } from './batting-table.component';

describe('BattingTableComponent', () => {
  let component: BattingTableComponent;
  let fixture: ComponentFixture<BattingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
