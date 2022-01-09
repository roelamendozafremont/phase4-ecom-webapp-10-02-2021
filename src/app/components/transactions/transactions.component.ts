import { Component, OnInit } from '@angular/core';

import { TransactionService } from 'src/app/services/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  public transactions: any;

  // inject dependencies
  constructor(private transactionService: TransactionService, private router:Router) { }

  ngOnInit(): void {

    this.getTransactions();
  }

  public getTransactions() {
    this.transactionService.getTransactions().subscribe(
      (res) => {
        this.transactions = res;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public onDelete(id:string) {
    this.transactionService.deleteTransaction(id).subscribe(
      res => { 
        console.log("Transaction is deleted !",id);
        this.getTransactions();
       },
      err => { console.log("Transaction delete failed! ");}
    )
  }

  public onUpdate(transaction:any){
    this.router.navigateByUrl('/transactions/update', { state: transaction});
  }

}
