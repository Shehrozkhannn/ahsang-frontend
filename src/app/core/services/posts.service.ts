import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private api = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getPosts(page: number) {
    return this.http.get(`${this.api}?page=${page}`);
  }

  getPost(id: number) {
    return this.http.get(`${this.api}/${id}`);
  }

  createPost(data: { title: string, body: string }) {
    return this.http.post(this.api, data);
  }
}
