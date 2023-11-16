
// import { Component, HostListener, OnInit } from '@angular/core';
// import { PRODUCTS } from '../product';
// import { ProductService } from '../product.service';
// import { CartService } from '../cart.service';

// export interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
//   availability: boolean;
// }

// @Component({
//   selector: 'app-product',
//   templateUrl: './product.component.html',
//   styleUrls: ['./product.component.css']
// })
// export class ProductComponent implements OnInit {
//   products: Product[] = [];
//   currentPage = 1;
//   itemsPerPage = 6;
//   scrollThreshold = 100; // Adjust this value as needed
//   loading = false;

//   userName: string = '';
//   isLoggedIn: boolean = false;

//   constructor(
//     private productData: ProductService,
//     private productService: ProductService,
//     private cartService: CartService
//   ) {
//     this.userName = productData.userName;
//    // this.isLoggedIn = this.userName !== '';
//   }

//   ngOnInit() {
//     this.loadProducts(this.currentPage);
//     this.isLoggedIn = !!this.productService.username;
    
//   }

//   loadProducts(page: number) {
   
//     if (this.isLoggedIn) {
//       this.products.forEach(product => {
//         product.price *= 0.9; // Apply a 10% discount
//       });
//     }
//     if (page < 1) {
//       page = 1;
//     }

//     if (page > this.totalPages()) {
//       page = this.totalPages();
//     }

//     this.currentPage = page;

//     const startIndex = (this.currentPage - 1) * this.itemsPerPage;
//     this.products = this.products.concat(PRODUCTS.slice(startIndex, startIndex + this.itemsPerPage));
//   }

//   totalPages() {
//     return Math.ceil(PRODUCTS.length / this.itemsPerPage);
//   }

//   addToCart(product: Product) {
//     this.cartService.addToCart(product);
//   }

//   getPages(): number[] {
//     const total = this.totalPages();
//     return Array.from({ length: total }, (_, index) => index + 1);
//   }

//   @HostListener('window:scroll', [])
//   onScroll() {
//     const windowHeight = window.innerHeight;
//     const bodyHeight = document.body.scrollHeight;
//     const scrollPosition = window.scrollY;

//     const distanceToBottom = bodyHeight - (scrollPosition + windowHeight);

//     if (distanceToBottom < this.scrollThreshold && !this.loading) {
//       this.loading = true;
//       this.loadMoreItems();
//     }
//   }

//   loadMoreItems() {
//     // Prevent multiple loading requests while loading
//     if (this.currentPage < this.totalPages()) {
//       this.loadProducts(this.currentPage + 1);
//       this.loading = false;
//     }
//   }
// }
// //lazy loading





//pagination

import { Component } from '@angular/core';
import { PRODUCTS } from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  availability: boolean;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: Product[] = PRODUCTS;
  currentPage = 1;
  itemsPerPage = 9;

  userName: string = '';
  isLoggedIn: boolean = false;

  constructor(
    private productData: ProductService,
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.userName = productData.userName;
  }

  ngOnInit() {
    this.loadProducts(this.currentPage);
    this.isLoggedIn = !!this.productService.username;
    // if (this.isLoggedIn) {
    //   this.products.forEach(product => {
    //     product.price *= 0.9; // Apply a 10% discount
    //   });
    // }
  }

  loadProducts(page: number) {
    
    if (page < 1) {
      page = 1;
    }
  
    if (page > this.totalPages()) {
      page = this.totalPages();
    }
  
    this.currentPage = page;
  
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.products = PRODUCTS.slice(startIndex, startIndex + this.itemsPerPage);
  }

  totalPages() {
    return Math.ceil(PRODUCTS.length / this.itemsPerPage);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  getPages(): number[] {
    const total = this.totalPages();
    return Array.from({ length: total }, (_, index) => index + 1);
  }

  
}

