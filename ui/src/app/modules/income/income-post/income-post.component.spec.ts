import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomePostComponent } from './income-post.component';

describe('IncomePostComponent', () => {
  let component: IncomePostComponent;
  let fixture: ComponentFixture<IncomePostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomePostComponent]
    });
    fixture = TestBed.createComponent(IncomePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
