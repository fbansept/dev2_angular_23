
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],
})
export class ConnexionComponent {
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthentificationService,
    private http: HttpClient
  ) {}

  formulaire: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onConnexion() {
    if (this.formulaire.valid) {
      this.http.post(
        'http://localhost/backend-angular-dev2/authentification.php', 
        this.formulaire.value
      ).subscribe((reponse: any) => localStorage.setItem("jwt",reponse.jwt));
    }
  }
}
