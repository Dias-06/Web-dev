import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS } from '../../data/productsList';
@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
})
export class ProductList {
  products: Product[] = PRODUCTS;
  whatsApp(products : Product){
    const text = encodeURIComponent(`Check out this product: ${products.link}`)
    return `https://wa.me/?text=${text}`
  };
  telegram(products : Product){
    return `https://t.me/share/url?url=${encodeURIComponent(products.link)}&text=${encodeURIComponent(products.name)}`
  }
  selectedMainImages: {[key:number]: string} = {};
  setMainImage(image: string, product: Product){
    this.selectedMainImages[product.id] = image;
  }
}
