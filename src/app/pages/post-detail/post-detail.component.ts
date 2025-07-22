import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  imports: [],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent {
  post: any;

  constructor(
    private route: ActivatedRoute,
    // private blogService: BlogService
  ) {}

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');
    // this.blogService.getPostById(id).subscribe((data:any) => {
    //   this.post = data;
    // });
  }
}

