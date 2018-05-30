import { Component, OnInit } from '@angular/core';
import { ArtistDirService } from '../../services/artistDir.service';
import { Artist } from '../../models/artist';

@Component({
  selector: 'app-artist-dir',
  templateUrl: './artistDir.component.html',
  styleUrls: ['./artistDir.component.scss']
})
export class ArtistDirComponent implements OnInit {
  public artistsDir: Array<Artist> = [] ;
  constructor(private artistDirService: ArtistDirService) { }

  ngOnInit() {
    this.artistsDir = this.artistDirService.getArtistDirectory();

  }

}
