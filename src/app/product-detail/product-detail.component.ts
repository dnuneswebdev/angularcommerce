import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  product: Product
  
  constructor(private productService: ProductService) { 
    
  }

  ngOnInit() {
    // this.product = this.productService.getProduct()
  }

}
