import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { NgForm } from '@angular/forms';
import { IProduct } from '../interfaces/product';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  data: IProduct[] = [];

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(createForm: NgForm): void {

    this.productService.addNewProduct(createForm.value).subscribe({
      next: (product) => {
        console.log(product);
        // this.data = JSON.parse(localStorage.getItem('productData'));
        // if (this.data == null) {
          localStorage.setItem('productData', JSON.stringify(product));
        // } else {
        //   console.log(typeof this.data);
        //   this.data.push(product);
        //   localStorage.setItem('productData', JSON.stringify(this.data));
        // }

        this.router.navigate(['/catalog']);
      },
      error: (error) => {
        alert(error.message);
      }
    })
  }

}
