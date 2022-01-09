import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class AccountUpdateComponent implements OnInit {

  public accountForm: FormGroup;
  public submitted: boolean = false;
  public state:any;

  constructor(private fromBuilder: FormBuilder, private accountSrv:AccountService, private router:Router,public activateRoutes: ActivatedRoute) {
    this.accountForm = this.fromBuilder.group({
      id:[''],
      clientId: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      savingId: ['', [Validators.required]],
      checkingId: ['', [Validators.required]],
      dateOpen: ['', [Validators.required]],
    
    });
  }

  ngOnInit(): void {
    this.state = this.activateRoutes.paramMap .pipe(() => window.history.state);
    // console.log(this.state);
    // fill the fields
    this.accountForm.patchValue(this.state);
  }

  public onSubmit(loginForm: any) {
    if (loginForm.valid) {
      this.submitted = true;
      // console.log(this.accountForm.value);
      //call a update account method from service.
      this.accountSrv.updateAccount(this.accountForm.value).subscribe(res=>{
        // console.log(res);
        this.router.navigateByUrl("/accounts");
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
    return (this.accountForm.get(field)?.invalid && this.accountForm.get(field)?.touched && this.accountForm.get(field)?.errors);
  }
  get f() {
    return this.accountForm.controls;
  }

}
