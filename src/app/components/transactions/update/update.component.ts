import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class TransactionUpdateComponent implements OnInit {

  public transactionForm: FormGroup;
  public submitted: boolean = false;
  public state:any;

  constructor(private fromBuilder: FormBuilder, private transactionSrv:TransactionService, private router:Router,public activateRoutes: ActivatedRoute) {
    this.transactionForm = this.fromBuilder.group({
      id:[''],
//      clientId: ['', [Validators.required]],
 //     savingId: ['', [Validators.required]],
//      checkingId: ['', [Validators.required]],
      debitAmount: ['', [Validators.required]],
      creditAmount: ['', [Validators.required]],
      dateTransaction: ['', [Validators.required]],
      type: ['', [Validators.required]],
    
    });
  }

  ngOnInit(): void {
    this.state = this.activateRoutes.paramMap .pipe(() => window.history.state);
    // console.log(this.state);
    // fill the fields
    this.transactionForm.patchValue(this.state);
  }

  public onSubmit(loginForm: any) {
    if (loginForm.valid) {
      this.submitted = true;
      // console.log(this.transactionForm.value);
      //call a update transaction method from service.
      this.transactionSrv.updateTransaction(this.transactionForm.value).subscribe(res=>{
        // console.log(res);
        this.router.navigateByUrl("/transactions");
      });      
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
