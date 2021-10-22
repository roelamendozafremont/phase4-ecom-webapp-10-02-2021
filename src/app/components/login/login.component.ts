import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login :Login = {
    email:'',
    password:'',
    agree:''
  };
  public submitted:boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onSubmit(loginForm: any) {
    if ((loginForm.valid) && (this.login.email == "roelklet@gmail.com") && (this.login.password == "password")) {
      this.submitted = true;
      //console.log(this.login);
      this.router.navigate(['products']);

    } else{ 
      console.log("Invalid Form !");
      this.validateForm(loginForm);
    }
  }

  public validateForm(form:any){
      Object.keys(form.controls).forEach(field => {
        const control = form.controls[field];
        control.markAsTouched({ onlySelf: true});
      })
  }

  hasError(field:any){
    return (field.invalid && field.touched && field.errors);
  }
}

interface Login {
  email:string;
  password:string;
  agree:string;
}
