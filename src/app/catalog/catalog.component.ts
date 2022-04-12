import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IProduct } from '../interfaces/product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  products: IProduct[];
  data: any;

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: products => {
        this.products = products;
        this.data = JSON.parse(localStorage.getItem('productData'));


        this.data == null ? this.data = '' : this.products.push(this.data);
        
      }
    })

  }

  cartAdd(): void {
    
  }

}
