import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../interfaces/product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  product: IProduct;
  
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductServiceService, private router: Router) { }
  
  ngOnInit(): void {
    const productId = this.activatedRoute.snapshot.params['id'];
    
    this.productService.getProductById(productId).subscribe({
      next: product => {
        if(productId > 20) {
          this.product = JSON.parse(localStorage.getItem('productData'));
        } else if (JSON.parse(localStorage.getItem('editedProduct')).id == productId) {
          this.product = JSON.parse(localStorage.getItem('editedProduct'));
        } else {
          this.product = product;
        }

      },
      error: (error) => {
        alert(error.message);
      }
    })
  }

  editProduct(editForm: NgForm): void {
    const productId = this.activatedRoute.snapshot.params['id'];

    this.productService.updateProduct(productId, editForm.value).subscribe({
      next: (product) => {
        localStorage.setItem('editedProduct', JSON.stringify(product));
        this.router.navigate(['/catalog']);
      },
      error: (error) => {
        alert(error.message);
      }
    })
  }

}
