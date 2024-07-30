import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

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
  };

  errorMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private alertController: AlertController,
    private storage: Storage
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      )
    });
  }

  ngOnInit() { }

  loginUser(dataLogin: any) {
    console.log(dataLogin);
    this.authService.loginUser(dataLogin).then(res => {
      this.errorMessage = "";
      this.storage.set("isUserLoggedIn", true);
      this.navCtrl.navigateRoot("menu/home");
    }).catch(err => {
      this.errorMessage = err;
      this.presentAlert(this.errorMessage);
    });
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
