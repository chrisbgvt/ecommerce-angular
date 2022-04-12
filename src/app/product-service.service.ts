import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './interfaces/product';
import { IProductCart } from './interfaces/productCart';

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {

  url: string = 'https://fakestoreapi.com';

  constructor(private HttpClient: HttpClient) { }

  getAllProducts(): Observable<IProduct []> {
    return this.HttpClient.get<IProduct []>(this.url + '/products');
  }

  getProductById(id: number): Observable<IProduct> {
    return this.HttpClient.get<IProduct>(this.url + '/products/' + id);
  }

  submitCart(cartProduct: IProductCart): Observable<IProductCart> {
    return this.HttpClient.post<IProductCart>(this.url + '/carts', cartProduct);
  }

  getCart(user: number): Observable<IProductCart> {
    return this.HttpClient.get<IProductCart>(this.url + '/carts/' + user);
  }

  addNewProduct(product: IProduct): Observable<IProduct> {
    return this.HttpClient.post<IProduct>(this.url + '/products', product);
  }

  updateProduct(id: number, product: IProduct): Observable<IProduct> {
    return this.HttpClient.put<IProduct>(this.url + '/products/' + id, product);
  }

  deleteProduct(id: number): Observable<IProduct> {
    return this.HttpClient.delete<IProduct>(this.url + '/products/' + id);
  }
}
