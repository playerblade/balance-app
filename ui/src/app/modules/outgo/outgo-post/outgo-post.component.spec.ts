import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoPostComponent } from './outgo-post.component';

describe('OutgoPostComponent', () => {
  let component: OutgoPostComponent;
  let fixture: ComponentFixture<OutgoPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutgoPostComponent]
    });
    fixture = TestBed.createComponent(OutgoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
