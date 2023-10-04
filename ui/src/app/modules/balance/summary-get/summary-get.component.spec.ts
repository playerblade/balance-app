import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryGetComponent } from './summary-get.component';

describe('SummaryGetComponent', () => {
  let component: SummaryGetComponent;
  let fixture: ComponentFixture<SummaryGetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryGetComponent]
    });
    fixture = TestBed.createComponent(SummaryGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
