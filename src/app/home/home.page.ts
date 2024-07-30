import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ArtistModalComponent } from '../artist-modal/artist-modal.component';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController, private authService: AuthenticateService, private navCtrl: NavController) { }

  async openArtistModal() {
    const modal = await this.modalController.create({
      component: ArtistModalComponent
    });
    return await modal.present();
  }

  async logout() {
    await this.authService.logout();
    this.navCtrl.navigateRoot("/login"); // Redirige al inicio de sesión
  }
}
