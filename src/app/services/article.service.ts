import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiKey = environment.apiKey;
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTopHeadlines(): Observable<any>{
    const url = `${this.apiUrl}/top-headlines?country=us&apiKey=${this.apiKey}`;
    return this.http.get<any[]>(url);
  }

}
