import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './pages/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [ProductList],
  template: '<app-product-list></app-product-list>',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('kaspiApp');
}
