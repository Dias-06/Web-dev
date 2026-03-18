import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumType, Photo } from '../../models/album';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  baseUrl ='https://jsonplaceholder.typicode.com';
  http = inject(HttpClient);
  getAlbums(): Observable<AlbumType[]>{
    return this.http.get<AlbumType[]>(`${this.baseUrl}/albums`);
  }
  getAlbum(id:number): Observable<AlbumType>{
    return this.http.get<AlbumType>(`${this.baseUrl}/albums/${id}`)
  }
  getAlbumPhotos(id:number): Observable<Photo[]>{
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`)
  }
  deleteAlbum(id : number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`)
  }
  updateAlbum(album: AlbumType): Observable<AlbumType>{
    return this.http.put<AlbumType>(`${this.baseUrl}/albums/${album.id}`,album)
  }
}
