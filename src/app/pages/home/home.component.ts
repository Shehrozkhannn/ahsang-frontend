import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { PostsService } from '../../core/services/posts.service';

@Component({
  selector: 'app-home',
  imports: [AgGridAngular],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  posts: any[] = [];
  columnDefs = [
    { headerName: 'Title', field: 'title' },
    { headerName: 'Excerpt', field: 'body', valueGetter: (params: any) => params.data.body.slice(0, 200) },
    { headerName: 'Author', field: 'author', valueGetter: (params: any) => params.data.author?.username || 'N/A'},
    { headerName: 'Published Date', field: 'createdAt' },
  ];
  currentPage = 1;
  rowData: any[] = [];

  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.loadPosts(this.currentPage);
  }

  loadPosts(page: number) {
    this.postService.getPosts(page).subscribe((res: any) => {
      this.rowData = res.items; // Adjust this if backend structure is different
      console.log(res.items)
    });
  }
}
