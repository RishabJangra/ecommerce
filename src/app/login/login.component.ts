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
  username: string = '';
  password: string = '';

  showSuccessMessage: boolean = false;
  // predefinedUsername: string = 'rishab';
  // predefinedPassword: string = 'rishab';

  constructor(
    private authService: AuthService,
    private router: Router,
    private productData: ProductService) { }

  ngOnInit() { }
  showSuccess() {
    if (this.username==='rishab' && this.password==='rishab') {
      this.showSuccessMessage = true;
      this.productData.username = this.username;
      this.productData.password=this.password;
      this.router.navigate(['/home']);
      console.log('done')
    }

 
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
}
