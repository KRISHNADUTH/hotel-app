import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute:ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    
    this.reservationForm = this.formBuilder.group({
      checkInDate: ["", Validators.required],
      checkOutDate: ["", Validators.required],
      guestName: ["", Validators.required],
      guestEmail: ["", [Validators.required,Validators.email]],
      roomNumber: ["", Validators.required]
    })

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      let reservation = this.reservationService.getReservation(id);
      if (reservation)
        this.reservationForm.patchValue(reservation);
    }
  }



  onSubmit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      // If we can find ID in url path means we are trying to update the reservation.
      if (this.reservationForm.valid) {
        let reservation:Reservation=this.reservationForm.value
        this.reservationService.updateReservation(id, reservation);
        this.router.navigate(["/list"]);
      } else {
        window.alert("Updated reservation is not valid");
      }
    } else {
      // Newly added reservation
      if (this.reservationForm.valid) {
        let reservation: Reservation = this.reservationForm.value;
        this.reservationService.addReservation(reservation);
        this.router.navigate(["/list"]);
      }
      else {
        window.alert("Not valid.😢");
      }
    }
  }
}
