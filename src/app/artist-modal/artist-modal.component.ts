import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-artist-modal',
  templateUrl: './artist-modal.component.html',
  styleUrls: ['./artist-modal.component.scss']
})
export class ArtistModalComponent implements OnInit {
  artists: any[] = [];

  constructor(private modalController: ModalController, private artistService: ArtistService) { }

  ngOnInit() {
    this.loadArtists();
  }

  loadArtists() {
    this.artistService.getArtists().subscribe(data => {
      this.artists = data;
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
