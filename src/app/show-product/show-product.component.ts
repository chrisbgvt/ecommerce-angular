import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IProduct } from '../interfaces/product';
import { ProductServiceService } from '../product-service.service';
import { IProductCart } from '../interfaces/productCart';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {

  product: IProduct;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductServiceService, private router: Router) { }

  ngOnInit(): void {
    const productId = this.activatedRoute.snapshot.params['id'];
    
    this.productService.getProductById(productId).subscribe({
      next: product => {
        this.product = product;
        let data= JSON.parse(localStorage.getItem('productData'));
        if (productId == data.id) {
          this.product = data;
        }
        
        
      }
    })
  }

  addToCart(): void {
    const productId = this.activatedRoute.snapshot.params['id'];

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const body: IProductCart =  {
      userId: 50,
      date: date,
      products: [{productId:productId,quantity:1, title: this.product.title,
        price: this.product.price,
        image: this.product.image}]
    }
    // console.log(body);
    // this.router.navigate(['/product/' + productId + '/cart']);

    this.productService.submitCart(body).subscribe(() => {
      localStorage.setItem('cart', JSON.stringify(body));
      this.router.navigate(['/cart']);
      console.log(body);
      
    })
  }

  deleteProduct(): void {
    const productId = this.activatedRoute.snapshot.params['id'];

    this.productService.deleteProduct(productId).subscribe(() => {
      this.router.navigate(['/catalog']);
    })
  }

  getUserData() {
    let data = JSON.parse(localStorage.getItem('userData'));
    return data.userName;
  }

}
