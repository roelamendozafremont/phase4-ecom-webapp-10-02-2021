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
  providers: [DataService,ProductService,CustomerService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
