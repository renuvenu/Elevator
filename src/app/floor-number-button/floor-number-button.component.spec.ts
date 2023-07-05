import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorNumberButtonComponent } from './floor-number-button.component';

describe('FloorNumberButtonComponent', () => {
  let component: FloorNumberButtonComponent;
  let fixture: ComponentFixture<FloorNumberButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloorNumberButtonComponent]
    });
    fixture = TestBed.createComponent(FloorNumberButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
