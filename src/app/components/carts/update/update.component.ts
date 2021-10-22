import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class CIUpdateComponent implements OnInit {

  public cartForm: FormGroup;
  public submitted: boolean = false;
  public state:any;

  constructor(private fromBuilder: FormBuilder, private cartSrv:CartService, private router:Router,public activateRoutes: ActivatedRoute) {
    this.cartForm = this.fromBuilder.group({
      id:[''],
      productIds: ['', [Validators.required]],
      customerId: ['',[Validators.required]],
      total: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.state = this.activateRoutes.paramMap .pipe(() => window.history.state);
    this.cartForm.patchValue(this.state);
  }

  public onSubmit(loginForm: any) {
    if (loginForm.valid) {
      this.submitted = true;
      this.cartSrv.updateCart(this.cartForm.value).subscribe(res=>{
        this.router.navigateByUrl("/carts");
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
    return (this.cartForm.get(field)?.invalid && this.cartForm.get(field)?.touched && this.cartForm.get(field)?.errors);
  }
  get f() {
    return this.cartForm.controls;
  }

}
