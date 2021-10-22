import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { PListComponent } from './components/products/list/list.component';
import { PCreateComponent } from './components/products/create/create.component';
import { PUpdateComponent } from './components/products/update/update.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CListComponent } from './components/customers/list/list.component';
import { CCreateComponent } from './components/customers/create/create.component';
import { CUpdateComponent } from './components/customers/update/update.component';
import { CartsComponent } from './components/carts/carts.component';
import { CIListComponent } from './components/carts/list/list.component';
import { CICreateComponent } from './components/carts/create/create.component';
import { CIUpdateComponent } from './components/carts/update/update.component';

const routes: Routes = [
  { path:"", redirectTo:'/home', pathMatch:'full'},
  { path:"home", component:HomeComponent},
  { path:"login", component:LoginComponent},
  { path:"register", component:RegisterComponent},
  { path: "about", component: AboutComponent },

  { path:"products", children:[
    { path:"",component:ProductsComponent},
    { path:"list",component:PListComponent},
    { path:"create",component:PCreateComponent},
    { path:"update",component:PUpdateComponent}
  ]
  },
  {
    path: "customers", children: [
      { path: "", component: CustomersComponent },
      { path: "list", component: CListComponent },
      { path: "create", component: CCreateComponent },
      { path: "update", component: CUpdateComponent }
    ]
  },
  {
    path: "carts", children: [
      { path: "", component: CartsComponent },
      { path: "list", component: CIListComponent },
      { path: "create", component: CICreateComponent },
      { path: "update", component: CIUpdateComponent }
    ]
  },
  { path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
