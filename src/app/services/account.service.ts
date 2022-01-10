import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url: string = 'http://18.222.204.254:8090/api/accounts';

  constructor(private httpClient: HttpClient) { }

  // get all accounts
  public getAccounts() {
    return this.httpClient.get(this.url);
  }

  // get one account
  public getAccount(id: string) {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  // add account
  public addAccount(account: any) {
    return this.httpClient.post(this.url, account);
  }

  // update account
  public updateAccount(account: any) {
    return this.httpClient.put(this.url, account);
  }

  // delete account
  public deleteAccount(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

}
