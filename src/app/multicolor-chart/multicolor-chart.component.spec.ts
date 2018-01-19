import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticolorChartComponent } from './multicolor-chart.component';

describe('MulticolorChartComponent', () => {
  let component: MulticolorChartComponent;
  let fixture: ComponentFixture<MulticolorChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulticolorChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticolorChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
