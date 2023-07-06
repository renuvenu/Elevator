import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidBoxComponent } from './invalid-box.component';

describe('InvalidBoxComponent', () => {
  let component: InvalidBoxComponent;
  let fixture: ComponentFixture<InvalidBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvalidBoxComponent]
    });
    fixture = TestBed.createComponent(InvalidBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
