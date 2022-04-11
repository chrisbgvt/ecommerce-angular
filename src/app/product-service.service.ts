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

  addNewProduct(product: IProduct): Observable<IProduct> {
    return this.HttpClient.post<IProduct>('https://fakestoreapi.com/products', product);
  }

  updateProduct(id: number, product: IProduct): Observable<IProduct> {
    return this.HttpClient.put<IProduct>('https://fakestoreapi.com/products/' + id, product);
  }

  deleteProduct(id: number): Observable<IProduct> {
    return this.HttpClient.delete<IProduct>('https://fakestoreapi.com/products/' + id);
  }
}
