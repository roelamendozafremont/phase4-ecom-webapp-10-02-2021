import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class CUpdateComponent implements OnInit {

  public customerForm: FormGroup;
  public submitted: boolean = false;
  public state:any;

  constructor(private fromBuilder: FormBuilder, private customerSrv:CustomerService, private router:Router,public activateRoutes: ActivatedRoute) {
    this.customerForm = this.fromBuilder.group({
      id:[''],
      fname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      mname: ['', [Validators.required]],
      lname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    
    });
  }

  ngOnInit(): void {
    this.state = this.activateRoutes.paramMap .pipe(() => window.history.state);
    // console.log(this.state);
    this.customerForm.patchValue(this.state);
  }

  public onSubmit(loginForm: any) {
    if (loginForm.valid) {
      this.submitted = true;
      this.customerSrv.updateCustomer(this.customerForm.value).subscribe(res=>{
        // console.log(res);
        this.router.navigateByUrl("/customers");
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
    return (this.customerForm.get(field)?.invalid && this.customerForm.get(field)?.touched && this.customerForm.get(field)?.errors);
  }
  get f() {
    return this.customerForm.controls;
  }

}
