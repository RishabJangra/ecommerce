import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product/product.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);

  cart$ = this.cartSubject.asObservable();

  addToCart(item: Product) {
    this.cartItems.push(item);
    this.cartSubject.next(this.cartItems);
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
  }

  removeFromCart(itemId: number) {
    const itemIndex = this.cartItems.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
      this.cartItems.splice(itemIndex, 1);
      this.cartSubject.next(this.cartItems);
    }
  }
  
}
