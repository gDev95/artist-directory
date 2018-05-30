import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistFormComponent } from './components/artistForm/artistForm.component';
import { ArtistDirComponent } from './components/artistDir/artistDir.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistFormComponent,
    ArtistDirComponent
  ],
  imports: [
    BrowserModule,
    FormsModule      // <----------make sure you have added this.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
