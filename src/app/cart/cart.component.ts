import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../interfaces/product';
import { ProductServiceService } from '../product-service.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProductCart } from '../interfaces/productCart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  product: IProduct;

  cart: IProductCart;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductServiceService, private router: Router) { }

  ngOnInit(): void {
    const productId = this.activatedRoute.snapshot.params['id'];
    
    // this.productService.getProductById(productId).subscribe({
    //   next: product => {
    //     this.product = product;
    //   }
    // })


    
    this.productService.getCart(1).subscribe({
      next: cart => {
        this.cart = cart;
        // console.log(cart);
      }

      
    })
  }

  back(): void {
    this.router.navigate(['/catalog']);
  }


  calcTotalPrice() {
    
  }
}
