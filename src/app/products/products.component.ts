import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any[];
  products$: Observable<any[]>;
  constructor() {
    this.products$ = of([
      { id: 1, name: 'Padel Racket', price: 120 },
      { id: 2, name: 'Padel Balls (3-pack)', price: 15 },
      { id: 3, name: 'Padel Shoes', price: 80 },
      { id: 4, name: 'Padel Bag', price: 50 },
    ]);
  }
  ngOnInit(): void {
    this.products$.subscribe((productList) => {
      this.products = productList;
      console.log('Products loaded', this.products);
    });
  }
}
