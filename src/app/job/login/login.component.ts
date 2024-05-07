import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HomeComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm:any;
  activeForm:'login' | 'register' = 'login';


  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar){}
  ngOnInit()
  {
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.required]
    });

  }


toggleForm(form:'login' | 'register' )
{
  this.activeForm= form;
}
onRegister(){
  this.router.navigate(['/job/register']);
}
onHome(){
  this.router.navigate(['/job/home']);
}
onForgotPassword() {
  this.router.navigate(['/job/forgot-password']);
}

onRegisterr(){
  this.router.navigate(['/job/register']);
}
login(){
  if(this.loginForm.vaild)
    {
      console.log("Login info==>", this.loginForm.value);
      this.router.navigate(['/job/dashboard']);

    }
    else{
      this.snackBar.open('Invaild email or password!', 'Close', {duration:300});
    }
}
}


