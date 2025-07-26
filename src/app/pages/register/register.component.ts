import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Button } from 'primeng/button';
import { Checkbox } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { Password } from 'primeng/password';
import { AuthService } from '../../core/auth/auth.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule, Password, Checkbox, Button, InputTextModule, ToastModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;

   constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private messageService: MessageService) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
    }, { validators: this.passwordsMatchValidator });
  }

  
  passwordsMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

    onSubmit() {
    if (this.registerForm.invalid) return;
    const { username, email, password } = this.registerForm.value;
    this.authService.register({ username, email, password }).subscribe({
      next: (res:any) => {
        localStorage.setItem('userId', res.id);
        this.router.navigate(['/login']);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User Created Succesfully' });
      },
      error: err => {
         this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Registration Failed' });
        console.error('Registration failed:', err);
      }
    });
  }
}
