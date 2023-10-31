import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userName: string='';

  constructor(
    private router:Router,
    private productData: ProductService
  ){
  }
  ngOnInit(){}
  submitText(){
    this.productData.userName=this.userName;
    this.router.navigate(['/product'])
  }

}
