import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private url: string = 'http://localhost:8090/api/transactions';

  constructor(private httpClient: HttpClient) { }

  // get all transactions
  public getTransactions() {
    return this.httpClient.get(this.url);
  }

  // get one transaction
  public getTransaction(id: string) {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  // add transaction
  public addTransaction(transaction: any) {
    return this.httpClient.post(this.url, transaction);
  }

  // update transaction
  public updateTransaction(transaction: any) {
    return this.httpClient.put(this.url, transaction);
  }

  // delete transaction
  public deleteTransaction(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

}
