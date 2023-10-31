import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = {
    username: '',
    email: '',
    password: '',
    agreeTerms: false,
  };

  registerUser() {
    // Implement user registration logic here
    console.log('User registered:', this.user);
    // You can send the user data to your backend or perform any necessary actions.
  }

}
