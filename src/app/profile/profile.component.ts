import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: any; // Define the structure based on your user data

  constructor(private authService: AuthService,
    private productService: ProductService,
    private router: Router,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.authService.getUserProfile().subscribe(
      (data) => {
        this.userProfile = data; // Store the fetched user profile data
        console.log(this.userProfile)
        console.log(this.userProfile.userProfile.username)
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }

  openUpdateDialog(): void {
    const dialogRef = this.dialog.open(UpdateProfileComponent, {
      width: '300px' // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle the updated data from the dialog
        console.log('Updated data:', result);
        // Perform actions with updated data (e.g., update the user profile)
      }
    });
  }

  deleteUser(username: string): void {
    console.log(this.userProfile.userProfile.username);
    this.router.navigate(['/home']);
    this.authService.isLoggedIn=false;
    //this.productService.logout();
    this.authService.clearUsername;
    alert("User account is deleted successfully");
    this.authService.deleteUser(username).subscribe(
      (data) => {
        // Handle success response
        console.log('User deleted:', data);
        // Perform any necessary actions after successful deletion
      },
      (error) => {
        // Handle error response
        console.error('Error deleting user:', error);
        // Perform any necessary actions if deletion fails
      }
    );
  }
}