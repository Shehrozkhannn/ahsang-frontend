import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { Notfound } from './pages/notfound/notfound';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { RegisterComponent } from './pages/register/register.component';


export const appRoutes: Routes = [
     {
    path: '',
    component: AppLayout,
    children: [
      { path: '', component: HomeComponent },
      { path: 'post/:id', component: PostDetailComponent },
      { path: 'create', component: CreatePostComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'notfound', component: Notfound },
  { path: '**', redirectTo: '/notfound' }
];
