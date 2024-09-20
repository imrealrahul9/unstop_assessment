import { Component } from '@angular/core';
import { Coach, Seat } from '../models/seat.model';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css'],
})
export class CoachComponent {
  coach: Coach = new Coach();
  bookedSeats: Seat[] = [];

  bookSeats(seatsToBook: number) {
    try {
      const seats = this.coach.bookSeats(seatsToBook);
      this.bookedSeats.push(...seats);
    } catch (error: any) {
      alert(error.message);
    }
  }
}
