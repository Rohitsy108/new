import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registerForm: any;
  activeForm: 'register' | 'login' = 'register';

  constructor(private fb: FormBuilder,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      resume: [''] // Adding the resume field
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: any) {
    const password = formGroup.get('password').value;
    const confirmPassword = formGroup.get('confirmPassword').value;

    if (password !== confirmPassword) {
      formGroup.get('confirmPassword').setErrors({ mismatch: true });
    } else {
      formGroup.get('confirmPassword').setErrors(null);
    }
  }

  toggleForm(form: 'register' | 'login') {
    this.activeForm = form;
  }

  onLogin() {
    this.router.navigate(['/job/login']);
  }

  onLoginn() {
    this.router.navigate(['/job/login']);
  }
  onHome(){
    this.router.navigate(['/job/home']);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.registerForm.patchValue({
      resume: file
    });
  }

  register() {
    if (this.registerForm.valid) {
      console.log("Register info==>>", this.registerForm.value);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      this.router.navigate(['/job/login']);

    } else {
      this.snackBar.open('Please fill in all fields correctly!', 'Close', { duration: 3000 });
    }
  }
}
