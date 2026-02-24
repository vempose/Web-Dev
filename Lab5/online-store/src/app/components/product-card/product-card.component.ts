import {Component, input, signal, computed, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Product} from '../../models/product.model';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent implements OnInit {
  readonly product = input.required<Product>();
  readonly currentImage = signal<string>('');

  // just runs some code on initialization
  // like constructor in initialization block in Java
  ngOnInit() {
    const images = this.product().images;
    if (images && images.length > 0) {
      this.currentImage.set(images[0]);
    } else {
      this.currentImage.set(this.product().image);
    }
  }

  setCurrentImage(url: string) {
    this.currentImage.set(url);
  }

  prevImage() {
    this.navigateImage(-1);
  }

  nextImage() {
    this.navigateImage(1);
  }

  private navigateImage(direction: number) {
    const images = this.product().images;
    if (!images || images.length === 0) return;

    const currentUrl = this.currentImage();
    const currentIndex = images.indexOf(currentUrl);

    let newIndex = currentIndex + direction;

    if (newIndex >= images.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = images.length - 1;
    }

    this.currentImage.set(images[newIndex]);
  }

  readonly stars = computed(() => {
    const rating = this.product().rating;

    return Array(5).fill(0).map((_, i) => {
      if (rating >= i + 1) {
        return 'full';
      } else if (rating >= i + 0.5) {
        return 'half';
      } else {
        return 'empty';
      }
    });
  });

  readonly whatsappLink = computed(() => {
    const text = `Посмотри на это: ${this.product().name}`;
    const url = this.product().link;
    return `https://wa.me/?text=${encodeURIComponent(text + ': ' + url)}`;
  });

  readonly telegramLink = computed(() => {
    const text = this.product().name;
    const url = this.product().link;
    return `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
  });
  protected readonly ProductService = ProductService;

  favorite() {
    let favoriteId = this.product().id;

    console.log("В избранном: " + favoriteId);
  }
}
