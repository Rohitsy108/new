import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router
  ) {
    this.forgotPasswordForm = this.fb.group({
      emailOrPhone: ['', Validators.required]
    });
  }

  onLogin(){
    this.router.navigate(['/job/login']);
  }

  onRegister(){
    this.router.navigate(['/job/register']);
  }
  onHome(){
    this.router.navigate(['/job/home']);
  }

  submitForgotPasswordForm() {
    if (this.forgotPasswordForm.valid) {
      // Perform actions here when the form is submitted
      console.log('Verification code sent successfully');
      // Redirect to OTP verification page
    } else {
      // Handle form validation errors if needed
      console.log('Invalid form');
    }
  }

  submitPasswordResetForm() {
    // Here you can handle the logic for password reset after OTP verification
    // You can redirect to the password reset page or perform any other actions
    console.log('Password reset initiated');
  }

  submitOTPVerificationForm() {
    // Here you can handle the logic for OTP verification
    console.log('OTP verification initiated');
    // You can redirect to the OTP verification page or perform any other actions
  }
}
