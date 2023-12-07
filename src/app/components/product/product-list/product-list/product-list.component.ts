import { Component, OnInit } from '@angular/core';
import { ProductResource } from '../../../../models/product.resource';
import { ProductService } from '../../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  public title_panel: string = "Products List";
  public products: ProductResource[] = [];
  public show: boolean = false;

  constructor(
    private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.productService.loadProducts();
    this.productService.isLoaded$.subscribe(val => {
      if (val) {
        this.productService.products$.subscribe(result => {
          console.log(result[0].data);
          this.products = result;
        })
      }
    })
  }

  public addProduct() {
    console.log("daa")
    this.router.navigate(['/add']);
  }

}