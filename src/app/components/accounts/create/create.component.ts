import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class AccountCreateComponent implements OnInit {

  public accountForm: FormGroup;
  public submitted: boolean = false;

  constructor(private fromBuilder: FormBuilder, private accountSrv:AccountService, private router:Router) {
    this.accountForm = this.fromBuilder.group({
      clientId: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      savingId: ['', [Validators.required]],
      checkingId: ['', [Validators.required]],
      dateOpen: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(loginForm: any) {
    if (loginForm.valid) {
      this.submitted = true;
      // console.log(this.accountForm.value);
      //call a add account method from service.
      this.accountSrv.addAccount(this.accountForm.value).subscribe(res=>{
        // console.log(res);
        this.router.navigateByUrl("/accounts");
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
    return (this.accountForm.get(field)?.invalid && this.accountForm.get(field)?.touched && this.accountForm.get(field)?.errors);
  }
  get f() {
    return this.accountForm.controls;
  }

}
