export interface Seat {
    id: number;
    row: number;
    isBooked: boolean;
  }
  
  export class Coach {
    seats: Seat[] = [];
  
    constructor() {
      let id = 1;
      for (let row = 1; row <= 12; row++) {
        const seatsInRow = row === 12 ? 3 : 7; 
        for (let seat = 1; seat <= seatsInRow; seat++) {
          this.seats.push({ id: id++, row: row, isBooked: false });
        }
      }
    }
  
    getAvailableSeats(): Seat[] {
      return this.seats.filter(seat => !seat.isBooked);
    }
  
    bookSeats(seatsToBook: number): Seat[] {
      const availableSeats = this.getAvailableSeats();
      if (availableSeats.length < seatsToBook) {
        throw new Error('Not enough seats available');
      }
      if(seatsToBook > 7){
        throw new Error('You can only book a maximum of 7');
      }

      let seatsBooked: Seat[] = [];
      for (let row = 1; row <= 12; row++) {
        let rowSeats = availableSeats.filter(seat => seat.row === row);
        if (rowSeats.length >= seatsToBook) {
          seatsBooked = rowSeats.slice(0, seatsToBook);
          break;
        }
      }
  
      if (seatsBooked.length === 0) {
        seatsBooked = availableSeats.slice(0, seatsToBook);
      }
  
      seatsBooked.forEach(seat => seat.isBooked = true);
      return seatsBooked;
    }
  }
  