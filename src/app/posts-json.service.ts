import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class PostsJsonService {
  posts;
  constructor(private http: HttpClient) {}
  getPosts(): Observable<Object> {
    this.posts = this.http.get("https://jsonplaceholder.typicode.com/posts");
    console.log("recieved posts: ", this.posts);
    return this.posts;
  }
}
