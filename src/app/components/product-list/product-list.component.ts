import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  // @Input() products!: IProduct[]
  // @Output() onRemove = new EventEmitter<any>();
  products!: IProduct[]
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    })
  }


  removeItem(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id)
    })
    // this.onRemove.emit(id);
  }
}



// ProductList.js
// function ProductList({ products, onRemove }) {
//   return <div>
//     {
//       products.map(product => product.name)
// <button onClick={() => onRemove(product.id)}>Remove</button>
//         < /div>
//     }

// App.js

// <ProductList products={state} onRemove="onHandleRemove"/>
// <app-product-list [products]="products" />
