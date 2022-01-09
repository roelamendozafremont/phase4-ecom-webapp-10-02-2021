import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class TransactionCreateComponent implements OnInit {

  public transactionForm: FormGroup;
  public submitted: boolean = false;

  constructor(private fromBuilder: FormBuilder, private transactionSrv:TransactionService, private router:Router) {
    this.transactionForm = this.fromBuilder.group({
 //     clientId: ['', [Validators.required]],
 //     savingId: ['', [Validators.required]],
 //     checkingId: ['', [Validators.required]],
      debitAmount: ['', [Validators.required]],
      creditAmount: ['', [Validators.required]],
      dateTransaction: ['', [Validators.required]],
      type: ['', [Validators.required]],

    });
  }

  ngOnInit(): void {
  }

  public onSubmit(loginForm: any) {
    if (loginForm.valid) {
      this.submitted = true;
      // console.log(this.transactionForm.value);
      //call a add transaction method from service.
      this.transactionSrv.addTransaction(this.transactionForm.value).subscribe(res=>{
        // console.log(res);
        this.router.navigateByUrl("/transactions");
      })
      
    } else {
      console.log("Invalid Form !");
      this.validateForm(loginForm);
    }
  }

  public validateForm(form: any) {
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else{
        this.validateForm(control)
      }
    })
  }

  hasError(field: any) {
    return (this.transactionForm.get(field)?.invalid && this.transactionForm.get(field)?.touched && this.transactionForm.get(field)?.errors);
  }
  get f() {
    return this.transactionForm.controls;
  }

}
