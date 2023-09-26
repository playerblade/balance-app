import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeGetComponent } from './income-get.component';

describe('IncomeGetComponent', () => {
  let component: IncomeGetComponent;
  let fixture: ComponentFixture<IncomeGetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomeGetComponent]
    });
    fixture = TestBed.createComponent(IncomeGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
