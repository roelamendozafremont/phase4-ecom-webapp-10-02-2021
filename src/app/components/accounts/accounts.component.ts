import { Component, OnInit } from '@angular/core';

import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  public accounts: any;

  // inject dependencies
  constructor(private accountService: AccountService, private router:Router) { }

  ngOnInit(): void {

    this.getAccounts();
  }

  public getAccounts() {
    this.accountService.getAccounts().subscribe(
      (res) => {
        this.accounts = res;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public onDelete(id:string) {
    this.accountService.deleteAccount(id).subscribe(
      res => { 
        console.log("Account is deleted !",id);
        this.getAccounts();
       },
      err => { console.log("Account delete failed! ");}
    )
  }

  public onUpdate(account:any){
    this.router.navigateByUrl('/accounts/update', { state: account});
  }

}
