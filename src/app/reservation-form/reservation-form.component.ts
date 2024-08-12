import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    // console.log("initialising form🕺🕺🕺🕺🕺");
    
    this.reservationForm = this.formBuilder.group({
      checkInDate: ["", Validators.required],
      checkOutDate: ["", Validators.required],
      guestName: ["", Validators.required],
      guestEmail: ["", [Validators.required,Validators.email]],
      roomNumber: ["", Validators.required]
    })
  }



  onSubmit() {
    if (this.reservationForm.valid) {
      console.log("Valid.😊");
    }
    else {
      console.log("Not valid.😢");

    }
  }
}
