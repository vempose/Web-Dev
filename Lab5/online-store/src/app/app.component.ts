import {Component, inject, signal} from '@angular/core';
import {ProductListComponent} from './components/product-list/product-list.component';
import {CategoryNavComponent} from './components/category-nav/category-nav.component';
import {CategoryService} from './services/category.service';
import {Category} from './models/category.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductListComponent,
    CategoryNavComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categoryService = inject(CategoryService);
  selectedCategoryId = signal<number | undefined>(undefined);

  selectCategory(category: Category) {
    if (category.id == this.selectedCategoryId()) {
      this.selectedCategoryId.set(undefined);
    } else {
      this.selectedCategoryId.set(category.id);
    }
  }
}
