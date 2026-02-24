import {Injectable, signal} from '@angular/core';
import {Category} from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  readonly categories = signal<Category[]>([
    {
      id: 1,
      name: "Смартфоны"
    },
    {
      id: 2,
      name: "Умные часы"
    },
    {
      id: 3,
      name: "Наушники"
    },
    {
      id: 4,
      name: "Ноутбуки"
    },
    {
      id: 5,
      name: "Планшеты"
    }
  ]);

  getCategoryNameById(id: number) {
    return this.categories().find(category => category.id === id)?.name || "Другое";
  }
}
