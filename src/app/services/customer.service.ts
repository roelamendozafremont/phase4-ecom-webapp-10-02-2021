import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url: string = 'http://localhost:8090/api/customers';

  constructor(private httpClient: HttpClient) { }

  // get all customers
  public getCustomers() {
    return this.httpClient.get(this.url);
  }

  // get one customer
  public getCustomer(id: string) {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  // add customer
  public addCustomer(customer: any) {
    return this.httpClient.post(this.url, customer);
  }

  // update customer
  public updateCustomer(customer: any) {
    return this.httpClient.put(this.url, customer);
  }

  // delete customer
  public deleteCustomer(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

}
