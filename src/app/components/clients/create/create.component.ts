import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class ClientCreateComponent implements OnInit {

  public clientForm: FormGroup;
  public submitted: boolean = false;

  constructor(private fromBuilder: FormBuilder, private clientSrv:ClientService, private router:Router) {
    this.clientForm = this.fromBuilder.group({
      fname: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(30)]],
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
  }

  public onSubmit(loginForm: any) {
    if (loginForm.valid) {
      this.submitted = true;

      this.clientSrv.addClient(this.clientForm.value).subscribe(res=>{
        this.router.navigateByUrl("/clients");
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
    return (this.clientForm.get(field)?.invalid && this.clientForm.get(field)?.touched && this.clientForm.get(field)?.errors);
  }
  get f() {
    return this.clientForm.controls;
  }

}
