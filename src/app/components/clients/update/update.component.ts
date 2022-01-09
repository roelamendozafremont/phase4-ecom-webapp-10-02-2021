import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  public clientForm: FormGroup;
  public submitted: boolean = false;
  public state:any;

  constructor(private fromBuilder: FormBuilder, private clientSrv:ClientService, private router:Router,public activateRoutes: ActivatedRoute) {
    this.clientForm = this.fromBuilder.group({
      id:[''],
      fname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      mname: ['', [Validators.required]],
      lname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      postal: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    
    });
  }

  ngOnInit(): void {
    this.state = this.activateRoutes.paramMap .pipe(() => window.history.state);
    // console.log(this.state);
    this.clientForm.patchValue(this.state);
  }

  public onSubmit(loginForm: any) {
    if (loginForm.valid) {
      this.submitted = true;
      this.clientSrv.updateClient(this.clientForm.value).subscribe(res=>{
        // console.log(res);
        this.router.navigateByUrl("/clients");
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
    return (this.clientForm.get(field)?.invalid && this.clientForm.get(field)?.touched && this.clientForm.get(field)?.errors);
  }
  get f() {
    return this.clientForm.controls;
  }

}
