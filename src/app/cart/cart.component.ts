import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../interfaces/product';
import { ProductServiceService } from '../product-service.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProductCart } from '../interfaces/productCart';
import { NgForm } from '@angular/forms';
import { IOrder } from '../interfaces/order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnChanges {

  @Input() 
  
  quantity: number;
  total: number

  product: IProduct;

  cart: IProductCart;

  data: any;

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

        this.data = JSON.parse(localStorage.getItem('cart'));
        
        this.cart = this.data;
      }

      
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

  back(): void {
    this.router.navigate(['/catalog']);
  }

  blurEvent(event: any){
    this.quantity = event.target.value;
    let data = JSON.parse(localStorage.getItem('cart'));
    this.total = this.quantity * data.products[0].price;
  }

  placeOrder(): void {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    let data = JSON.parse(localStorage.getItem('cart'));

    const cart: IOrder =  {
      userId: 50,
      date: date,
      products: [{productId:data.products[0].productId,quantity:this.quantity}]
    }
    
    localStorage.setItem('placedOrder', JSON.stringify(cart));
    localStorage.setItem('cart', '');

    this.router.navigate(['/catalog']);
    alert("Order successfully placed!");
  }

  emptyCart(): void {
    localStorage.setItem('cart', '');
    this.router.navigate(['/catalog']);
    alert("Cart successfully emptied!");
  }
}
