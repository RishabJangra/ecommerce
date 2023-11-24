import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AddcmpComponent } from './addcmp/addcmp.component';
import {HttpClientModule} from '@angular/common/http';
import { ForgotComponent } from './forgot/forgot.component';
import { RegisterComponent } from './register/register.component';
import { FinalComponent } from './final/final.component';
import { ProfileComponent } from './profile/profile.component';
import { CapitalisePipe } from './pipes/capitalise.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

import { UpdateProfileComponent } from './update-profile/update-profile.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'product', component:ProductComponent},
  {path:'product-list', component:ProductListComponent},
  {path:'payment', component:PaymentComponent},
  {path:'success', component:SuccessComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
    PaymentComponent,
    NavbarComponent,
    SubscriptionComponent,
    SuccessComponent,
    LoginComponent,
    FooterComponent,
    AddcmpComponent,
    ForgotComponent,
    RegisterComponent,
    FinalComponent,
    ProfileComponent,
    CapitalisePipe,
    UpdateProfileComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule
    
  ],
  exports:[
  RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
