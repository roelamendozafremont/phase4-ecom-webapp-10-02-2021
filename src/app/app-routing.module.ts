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
import { ClientsComponent } from './components/clients/clients.component';
import { ClientListComponent } from './components/clients/list/list.component';
import { ClientCreateComponent } from './components/clients/create/create.component';
import { ClientUpdateComponent } from './components/clients/update/update.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AccountListComponent } from './components/accounts/list/list.component';
import { AccountCreateComponent } from './components/accounts/create/create.component';
import { AccountUpdateComponent } from './components/accounts/update/update.component';
import { CheckingsComponent } from './components/checkings/checkings.component';
import { CheckingListComponent } from './components/checkings/list/list.component';
import { CheckingCreateComponent } from './components/checkings/create/create.component';
import { CheckingUpdateComponent } from './components/checkings/update/update.component';
import { SavingsComponent } from './components/savings/savings.component';
import { SavingListComponent } from './components/savings/list/list.component';
import { SavingCreateComponent } from './components/savings/create/create.component';
import { SavingUpdateComponent } from './components/savings/update/update.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionListComponent } from './components/transactions/list/list.component';
import { TransactionCreateComponent } from './components/transactions/create/create.component';
import { TransactionUpdateComponent } from './components/transactions/update/update.component';

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
    path: "clients", children: [
      { path: "", component: ClientsComponent },
      { path: "list", component: ClientListComponent },
      { path: "create", component: ClientCreateComponent },
      { path: "update", component: ClientUpdateComponent }
    ]
  },
  {
    path: "accounts", children: [
      { path: "", component: AccountsComponent },
      { path: "list", component: AccountListComponent },
      { path: "create", component: AccountCreateComponent },
      { path: "update", component: AccountUpdateComponent }
    ]
  },
  {
    path: "checkings", children: [
      { path: "", component: CheckingsComponent },
      { path: "list", component: CheckingListComponent },
      { path: "create", component: CheckingCreateComponent },
      { path: "update", component: CheckingUpdateComponent }
    ]
  },
  {
    path: "savings", children: [
      { path: "", component: SavingsComponent },
      { path: "list", component: SavingListComponent },
      { path: "create", component: SavingCreateComponent },
      { path: "update", component: SavingUpdateComponent }
    ]
  },
  {
    path: "transactions", children: [
      { path: "", component: TransactionsComponent },
      { path: "list", component: TransactionListComponent },
      { path: "create", component: TransactionCreateComponent },
      { path: "update", component: TransactionUpdateComponent }
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
