import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
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

import { PropertyComponent } from './components/data/property/property.component';
import { StyleComponent } from './components/data/style/style.component';
import { EventComponent } from './components/data/event/event.component';
import { TwowayComponent } from './components/data/twoway/twoway.component';
import  {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DataService } from './services/data.service';
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';
import {CartService } from './services/cart.service';
import { HttpClientModule } from '@angular/common/http';
import { InputformatorDirective } from './directives/inputformator.directive';
import { HighlighterDirective } from './directives/highlighter.directive';
import { MultiplierPipe } from './pipes/multiplier.pipe';
import { SummaryPipe } from './pipes/summary.pipe';

import { ClientService } from './services/client.service';
import { AccountService } from './services/account.service';
import { CheckingService } from './services/checking.service';
import { SavingService } from './services/saving.service';
import { TransactionService } from './services/transaction.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    NotfoundComponent,
    ProductsComponent,
    PListComponent,
    PCreateComponent,
    PUpdateComponent,
    CustomersComponent,
    CListComponent,
    CCreateComponent,
    CUpdateComponent,

    ClientsComponent,
    ClientListComponent,
    ClientCreateComponent,
    ClientUpdateComponent,
    AccountsComponent,
    AccountListComponent,
    AccountCreateComponent,
    AccountUpdateComponent,
    CheckingsComponent,
    CheckingListComponent,
    CheckingCreateComponent,
    CheckingUpdateComponent,
    SavingsComponent,
    SavingListComponent,
    SavingCreateComponent,
    SavingUpdateComponent,
    TransactionsComponent,
    TransactionListComponent,
    TransactionCreateComponent,
    TransactionUpdateComponent,

    CartsComponent,
    CIListComponent,
    CICreateComponent,
    CIUpdateComponent,
    PropertyComponent,
    StyleComponent,
    EventComponent,
    TwowayComponent,
    InputformatorDirective,
    HighlighterDirective,
    MultiplierPipe,
    SummaryPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService, ProductService, CustomerService, CartService, ClientService, AccountService, CheckingService, SavingService, TransactionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
