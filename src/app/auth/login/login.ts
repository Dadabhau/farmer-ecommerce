import { Component, signal } from '@angular/core';
import { Card } from '../../shared/components/card/card';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginUserModel } from '../../core/model/loginUser.model';

@Component({
  selector: 'app-login',
  imports: [Card, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  user = signal<LoginUserModel>({
    email: '',
    password: '',
  });

  handleLogin(form: NgForm) {
    console.log('Login data:', this.user());
    // Here you would typically call an authentication service
  }
}
