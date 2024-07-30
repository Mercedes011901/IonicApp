import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private menu: MenuController, 
    private navCtrl: NavController,
    private authService: AuthenticateService
  ) { }

  ngOnInit() { }

  closeMenu() {
    this.menu.close();
  }

  async logout() {
    await this.authService.logout();
    this.navCtrl.navigateRoot("/login"); // Redirige al inicio de sesión
  }
}
