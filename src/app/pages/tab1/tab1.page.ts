import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Article, NewsResponse } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  articles: Article[] = [];
  page: number = 1;
  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;

  constructor(private newsService:NewsService) {}

  ngOnInit(){
    this.newsService.getTopHeadLines(this.page).subscribe((resp) => {
      console.log(resp.articles);

      this.articles = resp.articles;
    })
  }

  loadData(event:any){
    this.page += 1

    this.newsService.getTopHeadLines(this.page).subscribe((resp) => {

      this.articles = [...this.articles,...resp.articles];
      this.infiniteScroll.complete()
    })
  }

}
