import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Albums } from './pages/albums/albums/albums';
import { AlbumPhotos } from './pages/albums/album-photos/album-photos';
import { AlbumDetail } from './pages/albums/album-detail/album-detail';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: Home,
    title: 'Home',
  },
  {
    path: 'about',
    component: About,
    title: 'About',
  },
  {
    path: 'albums',
    children: [
      { path: '', component: Albums, title: 'Albums' },
      { path: ':id', component: AlbumDetail, title: 'Album Detail' },
      { path: ':id/photos', component: AlbumPhotos, title: 'Album Photos' },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
