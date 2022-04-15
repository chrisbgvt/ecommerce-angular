import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild("resetButton") resetButton: ElementRef;
  @ViewChild("inputFilter") inputFilter: ElementRef;
  @ViewChild("labelFilter") labelFilter: ElementRef;
  @ViewChild("filterDiv") filterDiv: ElementRef;

  products: IProduct[];
  data: any;
  names: Array<string> = [];
  copyOfProducts: IProduct[];

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: products => {
        this.products = products;
        this.data = JSON.parse(localStorage.getItem('productData'));
        
        const deletedId = JSON.parse(localStorage.getItem('deletedProduct'));
        const edited = JSON.parse(localStorage.getItem('editedProduct'));

        
        
        if (deletedId != null) {
          this.products = this.products.filter(product => product.id != Number(deletedId));
        }

        if (edited != null) {
          this.products.forEach((product, index) => {
            if (JSON.stringify(product) != JSON.stringify(edited) && product.id == edited.id) {
              this.products.splice(index, 1, edited);
            }
          })
        }

        this.data == null ? this.data = '' : this.products.push(this.data);

        this.products.forEach(product => {
          this.names.push(product.title)
        });
        
      },
      error: (error) => {
        alert(error.message);
      }
    })

  }

  filterCatalog(event: any): void {
    this.names.splice(0);
    this.names.push(event.target.nextElementSibling.innerHTML);
    this.copyOfProducts = [...this.products];
    this.products = this.products.filter(x => x.title == event.target.nextElementSibling.innerText);

    this.resetButton.nativeElement.disabled = false;
    this.filterDiv.nativeElement.style.display = 'block';
  }

  resetFilters(event: any): void {
    this.filterDiv.nativeElement.style.display = 'none';
    this.products = this.copyOfProducts;
    this.products.forEach(product => {
      this.names.push(product.title)
    });

    event.target.disabled = true;
  }

}
