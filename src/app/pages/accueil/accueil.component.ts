import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent {

  listeArticle:any = [];

  constructor(private http: HttpClient) {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((articles) => this.listeArticle = articles);
  }
}
