import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private httpClient: HttpClient) { }

  getArticles(): Observable<ArticleBrief[]> {
    return this.httpClient.get<ArticleBrief[]>(environment.baseUrl + 'api/article');
  }

  getArticle(id: string): Observable<Article> {
    return this.httpClient.get<Article>(environment.baseUrl + 'api/article/' + id);
  }
}
