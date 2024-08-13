import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = [];

  // CRUD operations - 
  getReservations(): Reservation[]{
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined{
    return this.reservations.find(reservation=>reservation.id===id);
  }

  addReservation(reservation: Reservation): void{
    this.reservations.push(reservation);
  }

  deleteReservation(id: string): void{
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index,1)
  }

  updateReservation(id: string, updatedReservation: Reservation):void {
    let index = this.reservations.findIndex(res => res.id === updatedReservation.id);
    this.reservations[index] = updatedReservation;
  }

}
