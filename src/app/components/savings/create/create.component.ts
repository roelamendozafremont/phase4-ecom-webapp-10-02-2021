import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SavingService } from 'src/app/services/saving.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class SavingCreateComponent implements OnInit {

  public savingForm: FormGroup;
  public submitted: boolean = false;

  constructor(private fromBuilder: FormBuilder, private savingSrv:SavingService, private router:Router) {
    this.savingForm = this.fromBuilder.group({
//      clientId: ['', [Validators.required]],
      balance: ['', [Validators.required]],
      type: ['', [Validators.required]],
    
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(loginForm: any) {
    if (loginForm.valid) {
      this.submitted = true;
      // console.log(this.savingForm.value);
      //call a add saving method from service.
      this.savingSrv.addSaving(this.savingForm.value).subscribe(res=>{
        // console.log(res);
        this.router.navigateByUrl("/savings");
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
    return (this.savingForm.get(field)?.invalid && this.savingForm.get(field)?.touched && this.savingForm.get(field)?.errors);
  }
  get f() {
    return this.savingForm.controls;
  }

}
