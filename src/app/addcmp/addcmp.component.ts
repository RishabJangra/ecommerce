import { Component } from '@angular/core';
import { Product } from '../product/product.component';
import { AddproductService } from '../addproduct.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcmp',
  templateUrl: './addcmp.component.html',
  styleUrls: ['./addcmp.component.css']
})
export class AddcmpComponent {
pr_name: string='';
pr_desc: string='';
pr_price: number=0;

constructor(
  private router: Router,
  private addProductService: AddproductService
) {}
onAdd() {
  const newProduct: Product = {
    id: this.generateNewId(), 
    name: this.pr_name,
    description: this.pr_desc,
    price: this.pr_price,
    imageUrl: '../../assets/rj.jpg', 
    availability: true,
  };

  this.addProductService.addProduct(newProduct);

  this.pr_name = '';
  this.pr_desc = '';
  this.pr_price = 0;
}

onFinish() {
  this.router.navigate(['/product-list']);
}

generateNewId() {
  return Math.floor(Math.random() * 100000);
}

}
