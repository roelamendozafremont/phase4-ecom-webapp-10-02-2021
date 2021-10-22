import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CCreateComponent implements OnInit {

  public customerForm: FormGroup;
  public submitted: boolean = false;

  constructor(private fromBuilder: FormBuilder, private customerSrv:CustomerService, private router:Router) {
    this.customerForm = this.fromBuilder.group({
      fname: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(30)]],
      mname: ['', [Validators.required]],
      lname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(loginForm: any) {
    if (loginForm.valid) {
      this.submitted = true;

      this.customerSrv.addCustomer(this.customerForm.value).subscribe(res=>{
        this.router.navigateByUrl("/customers");
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
    return (this.customerForm.get(field)?.invalid && this.customerForm.get(field)?.touched && this.customerForm.get(field)?.errors);
  }
  get f() {
    return this.customerForm.controls;
  }

}
