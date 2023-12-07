import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductPostModel } from '../../../../models/product.model';
import { ProductService } from '../../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  public productForm: FormGroup;
  public submitModel!: ProductPostModel;
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required]],
      year: ['', [Validators.required]],
      price: ['', [Validators.required]],
      cpuModel: ['', [Validators.required]],
      hardDisk: ['']
    });
  }

  // Function to add a new product to the list
  public submit() {
    if (this.productForm.valid) {
      const submitModel = {
        name: this.productForm.value.productName,
        data: {
          year: this.productForm.value.year,
          price: this.productForm.value.price,
          cpuModel: this.productForm.value.cpuModel,
          hardDisk: this.productForm.value.hardDisk
        }
      };
      this.productService.createProduct(submitModel);
      this.router.navigate(['/products'])
    }
  }
  public cancel() {
    this.router.navigate(['/products'])
  }
}
