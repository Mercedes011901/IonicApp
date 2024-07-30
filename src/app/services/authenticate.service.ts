import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

  // Registrar usuario
  async registerUser(registerData: any) {
    registerData.password = btoa(registerData.password);
    return this.storage.set("user", registerData);
  }

  // Iniciar sesión
  async loginUser(credentials: any) {
    const user = await this.storage.get('user');
    if (user && user.email === credentials.email && user.password === btoa(credentials.password)) {
      await this.storage.set("isUserLoggedIn", true);
      return true;
    } else {
      throw new Error("Credenciales inválidas");
    }
  }

  // Cerrar sesión
  async logout() {
    await this.storage.remove("isUserLoggedIn");
    return Promise.resolve();
  }

  // Verificar si el usuario está autenticado
  async isAuthenticated() {
    const isLoggedIn = await this.storage.get("isUserLoggedIn");
    return !!isLoggedIn;
  }
}
