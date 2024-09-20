import { Component, Input } from '@angular/core';
import { Seat } from '../models/seat.model';

@Component({
  selector: 'app-seat',
  template: `
    <div [class.booked]="seat.isBooked">
      <span>{{ seat.id }}</span>
    </div>
  `,
  styles: [`
    div {
      width: 40px;
      height: 40px;
      border: 1px solid #000;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    div.booked {
      background-color: red;
      color: white;
    }

    div:hover {
      background-color: #ddd;
    }
  `]
})
export class SeatComponent {
  @Input() seat!: Seat;
}
