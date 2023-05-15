import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent {
  listeArticle: any = [];

  constructor(private http: HttpClient) {
   this.raffraichirListeArticle();
  }

  raffraichirListeArticle() {
     this.http
      .get('http://localhost/backend-angular-dev2/liste-articles.php')
      .subscribe((articles) => (this.listeArticle = articles));
  }

  onSuppressionArticle(idArticle: number) {
    this.http.delete(
      'http://localhost/backend-angular-dev2/suppression-article.php?id=' + idArticle
    ).subscribe((reponse) => this.raffraichirListeArticle());
  }
}
