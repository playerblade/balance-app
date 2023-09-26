import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoGetComponent } from './outgo-get.component';

describe('OutgoGetComponent', () => {
  let component: OutgoGetComponent;
  let fixture: ComponentFixture<OutgoGetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutgoGetComponent]
    });
    fixture = TestBed.createComponent(OutgoGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
