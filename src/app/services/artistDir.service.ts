import { Injectable } from '@angular/core';

import { Artist } from '../models/artist';
import { ArtistDirComponent } from '../components/artistDir/artistDir.component';
import { LocalStorageService } from './localStorage.service';

@Injectable({
    providedIn: 'root',
})
export class ArtistDirService {
    public artistDir: Array < Artist > = [];

    constructor(private localStorageService: LocalStorageService) { }

    getArtistDirectory(): Array<Artist> {
        this.artistDir = this.localStorageService.getObjectWithKey('artistDir')
                ? this.localStorageService.getObjectWithKey('artistDir') : [];
        return this.artistDir;
    }
    saveArtistDirectory(): void {
        this.localStorageService.saveObjectWithKey('artistDir', this.artistDir);
    }
    addArtistToDirectory(newArtist: Artist): void {
        this.artistDir.unshift(newArtist);
        this.artistDir.sort((a, b) => {
            const artistA = a.name.toLowerCase();
            const artistB = b.name.toLowerCase();
            if (artistA < artistB) {return -1; }
            if (artistA > artistB) {return 1; }
            return 0;
        });
        this.saveArtistDirectory();
    }

}
