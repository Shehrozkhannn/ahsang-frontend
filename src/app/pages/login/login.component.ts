import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Password } from "primeng/password";
import { Checkbox } from "primeng/checkbox";
import { Button } from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../core/auth/auth.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, Password, Checkbox, Button, InputTextModule,ToastModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) {
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
        this.router.navigate(['/']);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Sucessfully.' });
      },
      error: (err) => {
        console.error(err);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Credentials' });
      }
    });
  }
}
