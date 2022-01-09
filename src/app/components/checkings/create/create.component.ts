import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CheckingService } from 'src/app/services/checking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CheckingCreateComponent implements OnInit {

  public checkingForm: FormGroup;
  public submitted: boolean = false;

  constructor(private fromBuilder: FormBuilder, private checkingSrv:CheckingService, private router:Router) {
    this.checkingForm = this.fromBuilder.group({
 //     clientId: ['', [Validators.required]],
      balance: ['', [Validators.required]],
      type: ['', [Validators.required]],
    
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(loginForm: any) {
    if (loginForm.valid) {
      this.submitted = true;
      // console.log(this.checkingForm.value);
      //call a add checking method from service.
      this.checkingSrv.addChecking(this.checkingForm.value).subscribe(res=>{
        // console.log(res);
        this.router.navigateByUrl("/checkings");
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
    return (this.checkingForm.get(field)?.invalid && this.checkingForm.get(field)?.touched && this.checkingForm.get(field)?.errors);
  }
  get f() {
    return this.checkingForm.controls;
  }

}
