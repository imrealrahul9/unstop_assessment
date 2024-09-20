import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoachComponent } from './coach/coach.component';
import { SeatComponent } from './seat/seat.component';

@NgModule({
  declarations: [
    AppComponent,
    CoachComponent,
    SeatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
