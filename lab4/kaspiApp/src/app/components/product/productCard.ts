import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductCard {
  @Input() product!: Product;
  @Output() deletedId = new EventEmitter<number>();
  deleteById(){
    console.log('deliting')
    this.deletedId.emit(this.product.id)
  }
  selectedImages: {[key:number]: string} = {};
  total_likes: number = 0;
  ngOnInit(){
    this.total_likes = this.product.likes
  }
  counterLikes(){
    this.total_likes++
  }
  setMainImage(img: string){
    this.selectedImages[this.product.id] = img;
  }
  whatsApp(){
    const text = encodeURIComponent(`Check out this product: ${this.product.link}`)
    return `https://wa.me/?text=${text}`
  };
  telegram(){
    return `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`
  }
}
