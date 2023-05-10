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
    private auth: AuthentificationService
  ) {}

  formulaire: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onConnexion() {
    if (this.formulaire.valid) {
      this.auth.connecte = true;
    }
  }
}
