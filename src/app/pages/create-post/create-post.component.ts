import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { PostsService } from '../../core/services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  imports: [ButtonModule, InputTextModule, TextareaModule,ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {
  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });

  constructor(private postService: PostsService,
    private router: Router) {
  }

  onSubmit() {
    if (this.postForm.valid) {
       const userId = Number(localStorage.getItem('userId'));
      const postData = {
        title: this.postForm.value.title as string,
        body: this.postForm.value.body as string,
        userId: userId
      };
      console.log(localStorage.getItem('access_token'));
      this.postService.createPost(postData).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
