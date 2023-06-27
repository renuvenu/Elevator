import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLiftComponent } from './single-lift.component';

describe('SingleLiftComponent', () => {
  let component: SingleLiftComponent;
  let fixture: ComponentFixture<SingleLiftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleLiftComponent]
    });
    fixture = TestBed.createComponent(SingleLiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
