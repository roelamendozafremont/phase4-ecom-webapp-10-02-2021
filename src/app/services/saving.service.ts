import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SavingService {

  private url: string = 'http://localhost:8090/api/savings';

  constructor(private httpClient: HttpClient) { }

  // get all savings
  public getSavings() {
    return this.httpClient.get(this.url);
  }

  // get one saving
  public getSaving(id: string) {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  // add saving
  public addSaving(saving: any) {
    return this.httpClient.post(this.url, saving);
  }

  // update saving
  public updateSaving(saving: any) {
    return this.httpClient.put(this.url, saving);
  }

  // delete saving
  public deleteSaving(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

}
