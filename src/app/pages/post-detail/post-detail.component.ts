import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../core/services/posts.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  imports: [DatePipe],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent {
  post: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.postService.getPost(id).subscribe((res) => {
      this.post = res;
    });
  }
}

