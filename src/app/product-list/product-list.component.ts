import { Component } from '@angular/core';
import { Product } from '../product/product.component'; 
import { AddproductService } from '../addproduct.service'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private addProductService: AddproductService) {}

  ngOnInit() {
    // Fetch the products from the AddProductService when the component initializes
    this.addProductService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
