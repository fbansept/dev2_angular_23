import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edition-article',
  templateUrl: './edition-article.component.html',
  styleUrls: ['./edition-article.component.scss'],
})
export class EditionArticleComponent {
  titre: string = 'eDitIoN UtilisateuR';
  aujourdhui: Date = new Date();

  constructor(private formBuilder: FormBuilder) {
  }

  formulaire: FormGroup = this.formBuilder.group({
    nom: ['', [Validators.required, Validators.maxLength(20)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
  });

  onAjoutArticle() {
    if (this.formulaire.valid) {
      console.log('Formulaire envoyé');
      console.log(this.formulaire.value);
    }
  }
}
