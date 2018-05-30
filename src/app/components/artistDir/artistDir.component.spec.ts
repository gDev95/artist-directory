import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDirComponent } from './artist-dir.component';

describe('ArtistDirComponent', () => {
  let component: ArtistDirComponent;
  let fixture: ComponentFixture<ArtistDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
