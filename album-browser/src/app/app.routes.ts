import { Routes } from '@angular/router';
import { About } from './about/about';
import { AlbumsList } from './albums/albums';
import { AlbumDetails } from './album-details/album-details';
import { AlbumPhotos } from './album-photos/album-photos';
import { Home } from './home/home';

export const routes: Routes = [
    {path: '',redirectTo: "/home" , pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'about', component: About},
    {path: 'albums', component: AlbumsList},
    {path: 'albums/:id',component: AlbumDetails},
    {path: 'albums/:id/photos', component: AlbumPhotos }
]; 
