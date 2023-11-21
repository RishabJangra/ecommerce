import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: any; // Define the structure based on your user data

  constructor(private authService: AuthService) {}

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
}