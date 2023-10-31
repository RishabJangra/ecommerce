import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn: boolean = false;
  
  constructor(private cartService: CartService,
    private router: Router,
    private productService: ProductService) {}
    
  ngOnInit() {
    this.isLoggedIn = !!this.productService.user;
  }

}
