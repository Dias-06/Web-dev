import { Component, signal } from '@angular/core';
import { ProductList } from './components/product-list/product-list';
import { CategoriesList } from './components/categories-list/categories-list';
import { getProductsByCategory, PRODUCTS } from './data/productsList';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  imports: [ProductList, CategoriesList],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('kaspiApp');
  selectedCategory: number = 0;
  displayedProducts: Product[] = [...PRODUCTS];
  selectCategory(id: number){
    if(this.selectedCategory == id){
      this.selectedCategory = 0;
    }
    else this.selectedCategory = id;
  }
  deleteProduct(id: number){
    this.displayedProducts = this.displayedProducts.filter(item => item.id != id);
  }
  getSelectedProducts(){
    if(this.selectedCategory == 0){
      return this.displayedProducts;
    }
    else{
      return this.displayedProducts.filter(item => item.categoryId == this.selectedCategory);
    }
  }

}
