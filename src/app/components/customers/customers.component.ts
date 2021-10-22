import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public customers: any;

  // inject dependencies
  constructor(private dataService: DataService, private customerService: CustomerService, private router:Router) { }

  ngOnInit(): void {

    this.getCustomers();
  }

  public getCustomers() {
    this.customerService.getCustomers().subscribe(
      (res) => {
        this.customers = res;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public onDelete(id:string) {
    this.customerService.deleteCustomer(id).subscribe(
      res => { 
        console.log("Customer is deleted !",id);
        this.getCustomers();
       },
      err => { console.log("Customer delete failed! ");}
    )
  }

  public onUpdate(customer:any){
    this.router.navigateByUrl('/customers/update', { state: customer});
  }

}
