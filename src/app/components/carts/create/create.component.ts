import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CICreateComponent implements OnInit {

  public cartForm: FormGroup;
  public submitted: boolean = false;

  constructor(private fromBuilder: FormBuilder, private cartSrv:CartService, private router:Router) {
    this.cartForm = this.fromBuilder.group({
      productIds: ['', [Validators.required]],
      customerId: ['',[Validators.required]],
      total: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(loginForm: any) {
    if (loginForm.valid) {
      this.submitted = true;
      this.cartSrv.addCart(this.cartForm.value).subscribe(res=>{
        this.router.navigateByUrl("/carts");
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
    return (this.cartForm.get(field)?.invalid && this.cartForm.get(field)?.touched && this.cartForm.get(field)?.errors);
  }
  get f() {
    return this.cartForm.controls;
  }

}
