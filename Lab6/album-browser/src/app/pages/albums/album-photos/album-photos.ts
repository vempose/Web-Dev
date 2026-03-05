import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../../services/album.service';
import { Photo } from '../../../models/photo.model';
import { map } from 'rxjs';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  imports: [NgOptimizedImage],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotos {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly albumService = inject(AlbumService);

  readonly albumId = signal<number | null>(null);
  readonly photos = signal<Photo[]>([]);
  readonly isLoading = signal<boolean>(true);
  readonly errorMessage = signal<string | null>(null);

  constructor() {
    this.route.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .subscribe(id => {
        this.albumId.set(id);
        this.loadPhotos(id);
    });
  }

  goBack(): void {
    const id = this.albumId();
    this.router.navigate(['/albums', id]);
  }

  private loadPhotos(id: number): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.albumService.getAlbumPhotos(id).subscribe({
      next: (photos) => this.photos.set(photos),
      error: () => this.errorMessage.set('Failed to load album photos.'),
      complete: () => this.isLoading.set(false),
    });
  }
}
