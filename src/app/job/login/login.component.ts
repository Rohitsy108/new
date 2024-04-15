import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm:any;
  registerForm:any;
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

    this.registerForm = this.fb.group({
      username:['', Validators.required],
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.required]
    })
  }


toggleForm(form:'login' | 'register')
{
  this.activeForm= form;
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
register()
{
  if(this.registerForm.vaild)
    {
      console.log("Register info==>>", this.registerForm.value);
      setTimeout(()=>{
        window.location.reload();
      },2000);
      this.router.navigate(['/job/login']);

    }
    else{
      this.snackBar.open('Please fill in all fieleds correctly!', 'Close', {duration:300});
    }
}
}


