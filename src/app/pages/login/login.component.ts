import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Password } from "primeng/password";
import { Checkbox } from "primeng/checkbox";
import { Button } from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, Password, Checkbox, Button, InputTextModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    const { username, password } = this.loginForm.value;

    this.authService.login({username, password}).subscribe({
      next: (res:any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']); // redirect after login
      },
      error: (err) => {
        console.error(err);
        alert('Invalid credentials');
      }
    });
  }
}
