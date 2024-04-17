import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any ;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group ({
      email : ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6), this.createPasswordStrength]]
    })
  
  }

  loginSuccess(){
    console.log(this.loginForm)
  }

  createPasswordStrength(control : AbstractControl): ValidationErrors |  null {
    if(!control.value.includes('@')) {
      return { customError : true}
    }
    return null;
  }

}
