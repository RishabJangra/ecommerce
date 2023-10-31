import { Component } from '@angular/core';
import { ProductService } from '../product.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: string = '';
  password: string = '';

  showSuccessMessage: boolean = false;
  // predefinedUsername: string = 'rishab';
  // predefinedPassword: string = 'rishab';

  constructor(
    private router: Router,
    private productData: ProductService) { }

  ngOnInit() { }
  showSuccess() {
    if (this.user==='rishab' && this.password==='rishab') {
      this.showSuccessMessage = true;
      this.productData.user = this.user;
      this.productData.password=this.password;
      this.router.navigate(['/home']);
      console.log('done')
    }

  }
}
