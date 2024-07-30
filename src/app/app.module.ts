import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';

// Importa el componente modal y el servicio
import { ArtistModalComponent } from './artist-modal/artist-modal.component';
import { ArtistService } from './services/artist.service';

@NgModule({
  declarations: [
    AppComponent,
    ArtistModalComponent // Declara el componente modal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule // Asegúrate de importar HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ArtistService // Proporciona el servicio
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
