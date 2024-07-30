import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: "El Correo Electrónico es un campo obligatorio" },
      { type: "email", message: "Email Inválido" }
    ],
    password: [
      { type: "required", message: "La Contraseña es un campo obligatorio" },
      { type: "minlength", message: "La Contraseña debe tener al menos 6 caracteres" }
    ]
  }

  errorMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private alertController: AlertController,
    private storage: Storage
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() { }

  async loginUser(dataLogin: any) {
    try {
      await this.authService.loginUser(dataLogin);
      await this.storage.set("isUserLoggedIn", true);
      this.navCtrl.navigateForward("menu/home");
    } catch (err) {
      this.errorMessage = err;
      this.presentAlert(this.errorMessage);
    }
  }

  async presentAlert(mss: string) {
    const alert = await this.alertController.create({
      header: '¡Oops, parece que algo no anda bien!',
      message: mss,
      buttons: ['Ok'],
    });

    await alert.present();
  }
}
