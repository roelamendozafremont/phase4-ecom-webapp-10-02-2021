import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckingService {

  private url: string = 'http://localhost:8090/api/checkings';

  constructor(private httpClient: HttpClient) { }

  // get all checkings
  public getCheckings() {
    return this.httpClient.get(this.url);
  }

  // get one checking
  public getChecking(id: string) {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  // add checking
  public addChecking(checking: any) {
    return this.httpClient.post(this.url, checking);
  }

  // update checking
  public updateChecking(checking: any) {
    return this.httpClient.put(this.url, checking);
  }

  // delete checking
  public deleteChecking(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

}
