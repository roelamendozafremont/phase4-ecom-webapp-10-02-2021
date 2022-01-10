import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url: string = 'http://18.222.204.254:8090/api/clients';

  constructor(private httpClient: HttpClient) { }

  // get all clients
  public getClients() {
    return this.httpClient.get(this.url);
  }

  // get one client by id
  public getClientsById(id: string) {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  // add client
  public addClient(client: any) {
    return this.httpClient.post(this.url, client);
  }

  // update client
  public updateClient(client: any) {
    return this.httpClient.put(this.url, client);
  }

  // delete client
  public deleteClient(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

}
