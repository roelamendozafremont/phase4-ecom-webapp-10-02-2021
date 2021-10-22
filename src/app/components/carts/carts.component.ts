import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  public carts: any;

  // inject dependencies
  constructor(private dataService: DataService, private cartService: CartService, private router:Router) { }

  ngOnInit(): void {

    this.getCarts();
  }

  public getCarts() {
    this.cartService.getCarts().subscribe(
      (res) => {
        this.carts = res;
      },  
      (error) => {
        console.log(error);
      }
    )
  }

  public onDelete(id:string) {
    this.cartService.deleteCart(id).subscribe(
      res => { 
        console.log("Cart is deleted !",id);
        this.getCarts();
       },
      err => { console.log("Cart delete failed! ");}
    )
  }

  public onUpdate(cart:any){
    this.router.navigateByUrl('/carts/update', { state: cart});
  }

}
