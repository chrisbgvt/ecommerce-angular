import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(createForm: NgForm): void {

    this.productService.addNewProduct(createForm.value).subscribe({
      next: (product) => {
        console.log(product);
        this.router.navigate(['/catalog']);
      },
      error: (error) => {
        alert(error.message);
      }
    })
  }

}
