import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { RegistrationService } from '../registration-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // user = {
  //   username: '',
  //   email: '',
  //   password: '',
  //   agreeTerms: false,
  // };

  // registerUser() {
  //   console.log('User registered:', this.user);
  // }


  username: string = '';
  password: string = '';
  email: string = '';
  agreeTerms: boolean = false;
  registrationMessage: string = '';
  registrationForm: FormGroup;

  constructor(private registrationService :RegistrationService,
    private fb: FormBuilder,) {
      this.registrationForm = this.fb.group({
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      });
    }

  registerUser() {
    
    this.registrationService.registerUser(this.username, this.password, this.email)
      .subscribe(
        (response: any) => {
          this.registrationMessage = 'User is now registered';
          console.log('User registered:', response);
        },
        (error: any) => {
          if (error.status === 500) {
            this.registrationMessage = 'User registered already';
          }
           else {
            this.registrationMessage = 'User registered';
          }
         // console.error('User registration failed:', error);
        }
      );
  }

  // registerUser() {
  //   this.registrationService.registerUser(this.username, this.password, this.email)
  //     .subscribe(
  //       (response: any) => {
  //         if (response.error === 'User already registered') {
  //           this.registrationMessage = 'User registered already';
  //         } else {
  //           this.registrationMessage = 'User is now registered';
  //           console.log('User registered:', response);
  //         }
  //       }
  //     );
  // }
  


  // registerUser() {
  //   this.registrationService
  //     .registerUser(this.username, this.password, this.email)
  //     .subscribe(
  //       (response: any) => {
  //         console.log('User registered:', response);
  //         // Check the response and display appropriate messages
  //         if (response === 'User registered successfully') {
  //           // Display message for successful registration
  //           console.log('User is now registered');
  //         } else if (response === 'User already registered') {
  //           // Display message for already registered user
  //           console.log('User registered already');
  //         }
  //       },
  //       (error: HttpErrorResponse) => {
  //         // Handle error cases
  //         console.error('User registration failed:', error.statusText);
  //         // Display appropriate error message or perform other actions
  //       }
  //     );
  // }

  }
  

