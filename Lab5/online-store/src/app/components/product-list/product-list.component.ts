import {Component, computed, inject, input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductService} from '../../services/product.service';
import {ProductCardComponent} from '../product-card/product-card.component';
import {CategoryService} from '../../services/category.service';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: 'product-list.component.css',
})
export class ProductListComponent {
  productService = inject(ProductService);
  categoryService = inject(CategoryService);
  selectedCategoryId = input<number | undefined>();

  filteredProducts = computed(() => {
    const allProducts = this.productService.products();
    const activeId = this.selectedCategoryId();

    if (!activeId) return allProducts;

    return allProducts.filter(p => p.categoryId === activeId);
  });

  addLike(product: Product) {
    product.likes++;
  }

  removeProduct(product: Product) {
    this.productService.products.update(products => products.filter(p => p.id !== product.id))
  }
}
