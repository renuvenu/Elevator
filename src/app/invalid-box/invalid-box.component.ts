import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-invalid-box',
  templateUrl: './invalid-box.component.html',
  styleUrls: ['./invalid-box.component.css'],
})
export class InvalidBoxComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  @Output() closeInvalidPopup: EventEmitter<any> = new EventEmitter();
  navigateTouser() {
    this.closeInvalidPopup.emit();
  }
}
