import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightLimitExceededPopupComponent } from './weight-limit-exceeded-popup.component';

describe('WeightLimitExceededPopupComponent', () => {
  let component: WeightLimitExceededPopupComponent;
  let fixture: ComponentFixture<WeightLimitExceededPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeightLimitExceededPopupComponent]
    });
    fixture = TestBed.createComponent(WeightLimitExceededPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
