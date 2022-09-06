import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;
  private _localArticles:Article[] = [];

  constructor(private storage: Storage) {
    this.init();
   }

   get getLocalArticles(){
    return [...this._localArticles]
  }

   async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    await this.loadFavorites()

  }

  async saveOrRemoveArticle(article: Article){

   const exist = this._localArticles.find(a => a.title === article.title)

   if(exist){
    console.log('aca')
    this._localArticles = this._localArticles.filter(a => a.title !== article.title);
   }else{
    this._localArticles = [article, ...this._localArticles];
   }

   this._storage.set("articles",this._localArticles)
  }

  async loadFavorites(){
    try {
      const articles = await this._storage.get("articles");
      console.log({articles})
      this._localArticles = articles;
    } catch (error) {
      console.log(error)
    }
  }
}
