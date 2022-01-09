import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SavingService } from 'src/app/services/saving.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class SavingUpdateComponent implements OnInit {

  public savingForm: FormGroup;
  public submitted: boolean = false;
  public state:any;

  constructor(private fromBuilder: FormBuilder, private savingSrv:SavingService, private router:Router,public activateRoutes: ActivatedRoute) {
    this.savingForm = this.fromBuilder.group({
      id:[''],
//      clientId: ['', [Validators.required]],
      balance: ['', [Validators.required]],
      type: ['', [Validators.required]],
    
    });
  }

  ngOnInit(): void {
    this.state = this.activateRoutes.paramMap .pipe(() => window.history.state);
    // console.log(this.state);
    // fill the fields
    this.savingForm.patchValue(this.state);
  }

  public onSubmit(loginForm: any) {
    if (loginForm.valid) {
      this.submitted = true;
      // console.log(this.savingForm.value);
      //call a update saving method from service.
      this.savingSrv.updateSaving(this.savingForm.value).subscribe(res=>{
        // console.log(res);
        this.router.navigateByUrl("/savings");
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
    return (this.savingForm.get(field)?.invalid && this.savingForm.get(field)?.touched && this.savingForm.get(field)?.errors);
  }
  get f() {
    return this.savingForm.controls;
  }

}
