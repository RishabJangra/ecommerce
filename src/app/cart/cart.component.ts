import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product/product.component';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  isLoggedIn: boolean = false;

  constructor(private cartService: CartService,
    private router: Router,
    private productService: ProductService,
    private authService: AuthService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe((items) => {
      this.cartItems = items;
    });
  
    //this.isLoggedIn = !!this.authService.username;
    this.isLoggedIn = this.authService.isLoggedIn;
  
  }
  calculateTotal(): number {
    let total=0;
    for (const item of this.cartItems) {
      total += item.price;
    }
    return total;
  }

  removeItemFromCart(itemId: number) {
    this.cartService.removeFromCart(itemId);
  }

  // proceedToCheckout(): void {
  //   this.router.navigate(['payment']);
  // }
  proceedToCheckout(): void {
    if (this.isLoggedIn) {
      this.router.navigate(['payment']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
