import {Component, input, output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Category} from '../../models/category.model';

@Component({
  selector: 'app-category-nav',
  imports: [CommonModule],
  templateUrl: 'category-nav.component.html',
  styleUrl: 'category-nav.component.css',
})
export class CategoryNavComponent {
  categories = input.required<Category[]>();
  categoryChanged = output<Category>();
  selectedCategoryId = input.required<number | undefined>();

  selectCategory(category: Category) {
    this.categoryChanged.emit(category)
  }
}
