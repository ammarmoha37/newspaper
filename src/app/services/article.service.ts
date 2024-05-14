import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiKey = environment.apiKey;
  private apiUrl = environment.apiUrl;
  articleSelected = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  getTopHeadlines(): Observable<any>{
    const url = `${this.apiUrl}/top-headlines?country=us&apiKey=${this.apiKey}`;
    return this.http.get<any[]>(url);
  }

  getCategories(category: string): Observable<any>{
    const url = `${this.apiUrl}/top-headlines?country=us&category=${category}&apiKey=${this.apiKey}`;
    return this.http.get<any[]>(url);
  }

  getTrending(type: string): Observable<any>{
    const url = `${this.apiUrl}/everything?q="trending"&sortBy=${type}&apiKey=${this.apiKey}`;
    return this.http.get<any[]>(url);
  }

}
