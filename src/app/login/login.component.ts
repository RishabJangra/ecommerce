import { Component } from '@angular/core';
import { ProductService } from '../product.service';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { username: '', password: '' };
  username: string = '';
  password: string = '';

  showSuccessMessage: boolean = false;
  // predefinedUsername: string = 'rishab';
  // predefinedPassword: string = 'rishab';

  constructor(
    private authService: AuthService,
    private router: Router,
    private productData: ProductService) { }

  // ngOnInit() { }

  showSuccess(): void {
    const { username, password } = this.user;
    this.authService.login(username, password).subscribe({
      next: (response) => {
        console.log('Response:', response);
        // Check the response from the server
        if (response.message) {
          console.log("Success")
          //alert('Login successful');
          this.authService.isAuthenticated = true;
          this.router.navigate(['/home']);
          console.log(this.user+"Login Succesfull");
        } else {
          console.log("Error")
          alert('Invalid credentials');
         // console.log(this.user);
        }
      },
      error: (error) => {
        console.error('Login error:', error);
      },
    });
  }





  // showSuccess() {
  //   if (this.username==='rishab' && this.password==='rishab') {
  //     this.showSuccessMessage = true;
  //     this.productData.username = this.username;
  //     this.productData.password=this.password;
  //     this.router.navigate(['/home']);
  //     console.log('done')
  //   }

 


  // showSuccess() {
  //   this.authService.login(this.username, this.password).subscribe(
  //     (response) => {
  //       this.showSuccessMessage = true;
  //       this.productData.username = this.username;
  //       this.productData.password = this.password;
  //       this.router.navigate(['/home']);
  //       console.log('Login successful');
  //     },
  //     (error) => {
  //       console.error('Login error:', error);
  //       this.productData.username = this.username;
  //       this.productData.password = this.password;
  //       this.router.navigate(['/home']);
  //       // Handle error or show appropriate message
  //     }
  //   );
  // }
}
