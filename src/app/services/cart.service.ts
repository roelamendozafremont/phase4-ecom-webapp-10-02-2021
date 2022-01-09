import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private url: string = 'http://localhost:8090/api/carts';

  constructor(private httpClient: HttpClient) { }

  // get all carts
  public getCarts() {
    return this.httpClient.get(this.url);
  }

  // get one cart
  public getCart(id: string) {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  // add cart
  public addCart(cart: any) {
    return this.httpClient.post(this.url, cart);
  }

  // update cart
  public updateCart(cart: any) {
    return this.httpClient.put(this.url, cart);
  }

  // delete cart
  public deleteCart(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

}
