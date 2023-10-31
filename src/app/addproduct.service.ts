import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product/product.component';


@Injectable({
  providedIn: 'root'
})
export class AddproductService {
  private products: Product[] = [];

  private productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.products);

  constructor() {}

  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }
  
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
    this.productsSubject.next(this.products);
  }
}
