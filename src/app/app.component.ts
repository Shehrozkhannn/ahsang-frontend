import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './core/auth/auth.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
   providers: [MessageService],
  imports: [RouterModule,ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'blogs-ng';

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) {}
  
  ngOnInit(): void {
  if (!this.authService.isLoggedIn()) {
    this.authService.logout();
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Session expired. Please log in again.' });
  }
}
}
