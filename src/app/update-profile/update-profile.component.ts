import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {
  username: string = '';
  email: string = '';

  constructor(public dialogRef: MatDialogRef<UpdateProfileComponent>) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onUpdateClick(): void {
    // Perform the update logic here
    const updatedData = {
      username: this.username,
      email: this.email
    };
    this.dialogRef.close(updatedData);
  }
}