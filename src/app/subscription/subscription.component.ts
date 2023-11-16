import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {
  firstName: string='';
  lastName:string='';
  creditNo: string='';
  selectedMembershipType: string='';
  selectedOptions: string[] = [];
  data: any[]=[];
  currentPage = 1;

  itemsPerPage = 3;

  get paginatedList() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.list.slice(startIndex, endIndex);
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  get totalPages() {
    return Math.ceil(this.list.length / this.itemsPerPage);
  }

  constructor(
    private router:Router,
    private productData: ProductService
  ){
  }
  // ngOnInit() {
  //   this.productData.getData().subscribe((info) => {
  //     this.data = Object.entries(info);
  //   });
  //   // this.productData.getData().subscribe((response) => {
  //   //   this.data = response.data; // Access the 'data' property of the response
  //   // });
  // }

 

 

  list = new Array();
  users: any;

  // submitText(){
  //   this.productData.firstName=this.firstName;
  //   //this.productData.lastName=this.lastName
  //   this.productData.creditNo=this.creditNo;
  //   this.productData.selectedMembershipType=this.selectedMembershipType;
  //   this.productData.selectedOptions = this.selectedOptions;
  //   this.router.navigate(['/success'])
  // }
  updateSelectedOptions(option: string, event: any) {
    if (event.target.checked) {
      this.selectedOptions.push(option);
    } else {
      const index = this.selectedOptions.indexOf(option);
      if (index !== -1) {
        this.selectedOptions.splice(index, 1);
      }
    }
  }

  submitText() {
    this.productData.firstName=this.firstName;
    this.productData.creditNo=this.creditNo;
    this.productData.selectedMembershipType=this.selectedMembershipType;
    this.productData.selectedOptions = this.selectedOptions;
    this.productData.lastName=this.lastName;
   
    
  }
  }
