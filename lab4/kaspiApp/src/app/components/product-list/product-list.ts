import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS } from '../../data/productsList';
import { ProductCard } from '../../components/product/productCard';
@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
})
export class ProductList {
  @Input() selectedProducts!: Product[];
  @Output() onDeleteProduct = new EventEmitter<number>();
  onDelete(id: number){
    this.onDeleteProduct.emit(id);
  }
}

