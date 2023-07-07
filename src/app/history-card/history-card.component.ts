import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.css'],
})
export class HistoryCardComponent {
  @Input() userhistory = {
    id: '',
    personId: '',
    weight: 0,
    fromFloorNum: 0,
    toFloorNum: 0,
    travelledDateTime: '',
    status: '',
  };
  @Input() username: string = '';
}
