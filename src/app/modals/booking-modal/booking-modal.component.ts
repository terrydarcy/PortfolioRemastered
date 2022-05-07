import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.scss'],
})
export class BookingModalComponent implements OnInit {

  name: FormControl = new FormControl('', [Validators.required]);
  email : FormControl = new FormControl('', [Validators.email, Validators.required]);
  job : FormControl = new FormControl('', [Validators.required]);

  constructor(private dialogRef: MatDialogRef<BookingModalComponent>, @Inject(MAT_DIALOG_DATA) public data: {}) {}

  ngOnInit(): void { 
  }

  close() {
    this.dialogRef.close();
  }
}
