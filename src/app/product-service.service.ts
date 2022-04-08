import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './interfaces/product';
import { IProductCart } from './interfaces/productCart';

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {

  constructor(private HttpClient: HttpClient) { }

  getAllProducts(): Observable<IProduct []> {
    return this.HttpClient.get<IProduct []>('https://fakestoreapi.com/products');
  }

  getProductById(id: number): Observable<IProduct> {
    return this.HttpClient.get<IProduct>('https://fakestoreapi.com/products/' + id);
  }

  submitCart(cartProduct: IProductCart): Observable<IProductCart> {
    return this.HttpClient.post<IProductCart>('https://fakestoreapi.com/carts', cartProduct);
  }

  getCart(user: number): Observable<IProductCart> {
    return this.HttpClient.get<IProductCart>('https://fakestoreapi.com/carts/' + user);
  }
}
