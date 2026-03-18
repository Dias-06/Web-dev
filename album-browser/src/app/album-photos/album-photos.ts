import { Component, inject } from '@angular/core';
import { Photo } from '../../models/album';
import { AlbumService } from '../services/album.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-album-photos',
  imports: [RouterLink],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotos {
  albumService = inject(AlbumService)
  curRoute = inject(ActivatedRoute)
  cdr = inject(ChangeDetectorRef)
  loading = true;
  photos : Photo[] = [];
  ngOnInit(){
    const id = +this.curRoute.snapshot.paramMap.get('id')!;
    this.albumService.getAlbumPhotos(id).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
        console.log(data)
        this.cdr.detectChanges()
      },
      error: (er) => {
        alert(er)
        this.loading = false;
        this.cdr.detectChanges()
      }
    })
  }
}
