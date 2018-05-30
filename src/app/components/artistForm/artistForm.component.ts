import { Component, OnInit } from '@angular/core';
import { Artist } from '../../models/artist';
import { ArtistDirService } from '../../services/artistDir.service';
@Component({
  selector: 'app-artist-form',
  templateUrl: './artistForm.component.html',
  styleUrls: ['./artistForm.component.scss']
})
export class ArtistFormComponent {

  model = new Artist('');
  constructor(private artistDirService: ArtistDirService) { }

  onAddArtist(): void {
    const newArtist = new Artist(this.model.name);
    this.artistDirService.addArtistToDirectory(newArtist);
    this.model.setName('');
  }


}
