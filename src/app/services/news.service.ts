import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopHeadLines(){
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cb621a8e62db4fa89b85a30a08f2614f`)
  }
}
