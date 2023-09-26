import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceGetComponent } from './balance-get.component';

describe('BalanceGetComponent', () => {
  let component: BalanceGetComponent;
  let fixture: ComponentFixture<BalanceGetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceGetComponent]
    });
    fixture = TestBed.createComponent(BalanceGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
