import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../../../services/album.service';
import { Album } from '../../../models/album.model';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-album-detail',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly albumService = inject(AlbumService);

  readonly albumId = signal<number | null>(null);
  readonly album = signal<Album | null>(null);
  readonly isLoading = signal<boolean>(true);
  readonly isSaving = signal<boolean>(false);
  readonly errorMessage = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);

  readonly titleControl = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required, Validators.maxLength(200)],
  });

  readonly titleValue = toSignal(this.titleControl.valueChanges, {
    initialValue: this.titleControl.value,
  });

  readonly canSave = computed(() => {
    const currentAlbum = this.album();
    const trimmedTitle = this.titleValue().trim();

    if (!currentAlbum) return false;
    if (!trimmedTitle) return false;
    if (this.isSaving()) return false;
    if (this.titleControl.invalid) return false;

    return trimmedTitle !== currentAlbum.title;
  });

  constructor() {
    effect(() => {
      const currentAlbum = this.album();
      if (currentAlbum) {
        this.titleControl.setValue(currentAlbum.title);
      }
    });

    this.route.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .subscribe(id => {
        this.albumId.set(id);
        this.loadAlbum(id);
    });
  }

  save(): void {
    const currentAlbum = this.album();
    if (!currentAlbum || !this.canSave()) return;

    const updatedAlbum: Album = {
      ...currentAlbum,
      title: this.titleValue().trim()
    };

    this.isSaving.set(true);
    this.errorMessage.set(null);
    this.successMessage.set(null);

    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (savedAlbum) => {
        this.album.set(savedAlbum);
        this.successMessage.set('Album title saved successfully.');
      },
      error: () => {
        this.errorMessage.set('Failed to save album title. Please try again.');
      },
      complete: () => this.isSaving.set(false),
    });
  }

  goBack(): void {
    void this.router.navigate(['/albums']);
  }

  private loadAlbum(id: number): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.successMessage.set(null);

    this.albumService.getAlbum(id).subscribe({
      next: (album) => this.album.set(album),
      error: () => this.errorMessage.set('Failed to load album details.'),
      complete: () => this.isLoading.set(false),
    });
  }
}
