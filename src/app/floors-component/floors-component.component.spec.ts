import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorsComponentComponent } from './floors-component.component';

describe('FloorsComponentComponent', () => {
  let component: FloorsComponentComponent;
  let fixture: ComponentFixture<FloorsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloorsComponentComponent]
    });
    fixture = TestBed.createComponent(FloorsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
