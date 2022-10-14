import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Article } from 'src/app/interfaces';
// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Share } from "@capacitor/share"
// import { StorageService } from 'src/app/services/storage.service';

// TODO: TENGO UN ERROR CON EL INAPPBROWSER, NO ME AGARRA EL PLUGIN PARA ABRIR VENTANAS EXTERNAS DE FORMA NATIVA!


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  @Input() index:number;

  constructor(
    /**private iab: InAppBrowser, **/
    private actionSheetCtrl: ActionSheetController,
    // private storageService: StorageService
    ) { }

  ngOnInit() {}

  openArticle(){
    // window.open(this.article.url, '_blank')

    // const browser = this.iab.create(this.article.url);

    // browser.show()
  }

  // async openMenu(){

  // const inFavorites =  this.storageService.articlesInFavorites(this.article)

  // const actionSheet = await this.actionSheetCtrl.create({
  //   header: 'options',
  //   buttons: [
  //     {
  //       text: 'Share',
  //       icon: 'share-outline',
  //       handler: () => this.shareArticle()
  //     },
  //     {
  //       text: inFavorites ? 'Remove favorite' : 'Favorites',
  //       icon: inFavorites ? 'heart' : 'heart-outline',
  //       handler: () => this.onToggleFavorite()
  //     },
  //     {
  //       text: 'Cancel',
  //       icon: 'close-outline',
  //       role: 'cancel'
  //     }
  //   ]
  // })

//      await actionSheet.present()
//   }

//   async shareArticle(){
//     await Share.share({
//       title: this.article.title,
//       text: this.article.source.name,
//       url: this.article.url
//     })
//   }

//  async onToggleFavorite(){
//     await this.storageService.saveOrRemoveArticle(this.article)
//   }

}
