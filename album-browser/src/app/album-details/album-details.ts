import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { AlbumType } from '../../models/album';
import { AlbumService } from '../services/album.service';
import {FormsModule} from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-album-details',
  imports: [FormsModule],
  templateUrl: './album-details.html',
  styleUrl: './album-details.css',
})
export class AlbumDetails {
  album: AlbumType = {userId: 1,title: 'blabla', id: 2}
  loading = true;
  curRoute = inject(ActivatedRoute)
  titleInput = '';
  router = inject(Router);
  albumService = inject(AlbumService);
  cdr = inject(ChangeDetectorRef)
  goBack(){
    this.router.navigate(['/albums'])
  }
  goToPhotos(id : number){
    this.router.navigate(['/albums', id ,'photos'])
  }
  updateAlbum(){
    const newAlbum = {
      userId: this.album.userId,
      id: this.album.id,
      title: this.titleInput
    }
    this.albumService.updateAlbum(newAlbum).subscribe({
      next: (data) => {
        console.log(data)
        this.cdr.detectChanges()
      }
    })
  }
  ngOnInit(){
    const id = +this.curRoute.snapshot.paramMap.get('id')!
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data
        this.loading = false;
        console.log(data)
        this.cdr.detectChanges()
      },
      error: (e) => {
        console.log(e)
        this.loading = false;
        this.cdr.detectChanges()
      }
    })
  }
}
