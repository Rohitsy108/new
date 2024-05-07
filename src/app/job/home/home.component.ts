import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'

})
export class HomeComponent {

  constructor(
    private router: Router){}

  onLogin(){
    this.router.navigate(['/job/login']);
  }
  onRegister(){
    this.router.navigate(['/job/register']);
  }
  onHome(){
    this.router.navigate(['/job/home']);
  }
}

