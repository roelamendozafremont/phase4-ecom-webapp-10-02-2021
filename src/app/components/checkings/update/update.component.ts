import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CheckingService } from 'src/app/services/checking.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class CheckingUpdateComponent implements OnInit {

  public checkingForm: FormGroup;
  public submitted: boolean = false;
  public state:any;

  constructor(private fromBuilder: FormBuilder, private checkingSrv:CheckingService, private router:Router,public activateRoutes: ActivatedRoute) {
    this.checkingForm = this.fromBuilder.group({
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
    this.checkingForm.patchValue(this.state);
  }

  public onSubmit(loginForm: any) {
    if (loginForm.valid) {
      this.submitted = true;
      // console.log(this.checkingForm.value);
      //call a update checking method from service.
      this.checkingSrv.updateChecking(this.checkingForm.value).subscribe(res=>{
        // console.log(res);
        this.router.navigateByUrl("/checkings");
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
    return (this.checkingForm.get(field)?.invalid && this.checkingForm.get(field)?.touched && this.checkingForm.get(field)?.errors);
  }
  get f() {
    return this.checkingForm.controls;
  }

}
