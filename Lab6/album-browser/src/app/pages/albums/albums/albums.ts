import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../../services/album.service';
import { Album } from '../../../models/album.model';

@Component({
  selector: 'app-albums',
  imports: [RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums {
  private readonly albumService = inject(AlbumService);

  readonly albums = signal<Album[]>([]);
  readonly isLoading = signal<boolean>(true);
  readonly errorMessage = signal<string | null>(null);
  readonly deletingIds = signal<Set<number>>(new Set<number>());

  readonly hasAlbums = computed(() => this.albums().length > 0);

  constructor() {
    this.loadAlbums();
  }

  private loadAlbums(): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.albumService
      .getAlbums()
      .subscribe({
        next: (albums) => this.albums.set(albums),
        error: () => this.errorMessage.set('Failed to load albums. Please try again.'),
        complete: () => this.isLoading.set(false),
      });
  }

  deleteAlbum(id: number): void {
    if (this.deletingIds().has(id)) {
      return;
    }

    this.setDeleting(id, true);
    this.errorMessage.set(null);

    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums.update((items) => items.filter((album) => album.id !== id));
      },
      error: () => this.errorMessage.set('Failed to delete album. Please try again.'),
      complete: () => this.setDeleting(id, false),
    });
  }

  isDeleting(id: number): boolean {
    return this.deletingIds().has(id);
  }

  private setDeleting(id: number, value: boolean): void {
    this.deletingIds.update((current) => {
      const next = new Set(current);
      if (value) {
        next.add(id);
      } else {
        next.delete(id);
      }
      return next;
    });
  }
}
