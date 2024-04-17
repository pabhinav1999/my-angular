import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  createAccountForm: any;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createAccountForm = this.fb.group ({
      email : ['',[Validators.required, Validators.email]],
      name: ['',null],
      password: ['',[Validators.required, Validators.minLength(6), this.createPasswordStrength]]
    })
  }

  createPasswordStrength(control : AbstractControl): ValidationErrors |  null {
    if(!control.value.includes('@')) {
      return { customError : true}
    }
    return null;
  }

  createAccountSuccess(){
    console.log('Account Creation Succesful');
    this.router.navigate(['/login']);
  }

  formControlStatus(){
    console.log(this.createAccountForm.controls);
    console.log(this.createAccountForm.valid) 

  }

}
