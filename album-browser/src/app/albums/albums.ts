import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { AlbumType } from '../../models/album';
import { AlbumService } from '../services/album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  imports: [],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class AlbumsList {
  albums : AlbumType[] = []
  loading = true
  standalone = true
  cdr = inject(ChangeDetectorRef)
  constructor(private albumService:AlbumService, private router : Router){}

  deleteAlbum(id: number){
    this.albumService.deleteAlbum(id).subscribe({
      next: (data) => {
        console.log(data)
        this.albums = this.albums.filter(album => album.id !== id);
        this.cdr.detectChanges()
        
      },
      error: (e)=>{
        alert(e)
      }
    })
  }
  
  goToAlbum(id:number){
    this.router.navigate(['/albums',id])
  }
  ngOnInit(){
    this.albumService.getAlbums().subscribe({
      next: (data) =>{
        this.albums = data
        this.loading = false
        this.cdr.detectChanges()
      },
      error: (er) => {
        console.log(er)
        this.loading = false;
      },
      complete: () => {
        console.log("request completed")
      }
    })
  }
}
