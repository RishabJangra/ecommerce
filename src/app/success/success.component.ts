import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  firstName: string ='';
  creditNo: string ='';
  selectedMembershipType: string ='';
  selectedOptions: string[] = [];
    constructor(
    private productData : ProductService
  ){
    this.firstName=productData.firstName;
    this.creditNo=productData.creditNo;
    this.selectedMembershipType=productData.selectedMembershipType;
    this.selectedOptions=productData.selectedOptions;
  }
}
