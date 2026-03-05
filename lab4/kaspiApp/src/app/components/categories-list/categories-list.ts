import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CATEGORIES } from '../../data/categories';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-categories-list',
  imports: [NgClass],
  templateUrl: './categories-list.html',
})
export class CategoriesList {
  categories: Category[] = CATEGORIES;
  @Input() selectedCategory! : number | null; 
  @Output() categorySelected = new EventEmitter<number>();
  select(id : number){
    this.categorySelected.emit(id);
  }
}
