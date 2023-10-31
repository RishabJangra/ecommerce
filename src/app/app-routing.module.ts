import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PaymentComponent } from './payment/payment.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SuccessComponent } from './success/success.component';
import { LoginComponent } from './login/login.component';
import { AddcmpComponent } from './addcmp/addcmp.component';
import { ForgotComponent } from './forgot/forgot.component';
import { RegisterComponent } from './register/register.component';
import { FinalComponent } from './final/final.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product-list', component: ProductListComponent},
  { path: 'cart', component: CartComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'subscription', component: SubscriptionComponent},
  { path: 'success', component:SuccessComponent},
  { path: 'login', component:LoginComponent},
  { path: 'addcmp', component:AddcmpComponent},
  { path: 'home', component:HomeComponent},
  { path: 'forgot', component:ForgotComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'final', component:FinalComponent},
  { path:'home', loadChildren:()=>import ('./home/home.module').then(data => data.HomeModule)},
  { path:'product', loadChildren:()=>import ('./product/product.module').then(data => data.ProductModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
