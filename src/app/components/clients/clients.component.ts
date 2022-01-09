import { Component, OnInit } from '@angular/core';

import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  public clients: any;

  // inject dependencies
  constructor( private clientService: ClientService, private router:Router) { }

  ngOnInit(): void {

    this.getClients();
  }

  public getClients() {
    this.clientService.getClients().subscribe(
      (res) => {
        this.clients = res;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public onDelete(id:string) {
    this.clientService.deleteClient(id).subscribe(
      res => { 
        console.log("Client is deleted !",id);
        this.getClients();
       },
      err => { console.log("Client delete failed! ");}
    )
  }

  public onUpdate(client:any){
    this.router.navigateByUrl('/clients/update', { state: client});
  }

}
