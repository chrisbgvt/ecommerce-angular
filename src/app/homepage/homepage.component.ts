import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  products: IProduct[];

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.productService.getTopSellProducts().subscribe({
      next: products => {
        this.products = products;
      }
    })

  }

}
