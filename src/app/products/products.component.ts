import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap'



@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  filteredProducts: Product[] = []
  category: string
  product: Product[] = []

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.populateProducts()
  }

  applyFilter() {
    this.filteredProducts = (this.category) ?
    this.product.filter(p => p.category === this.category) :
    this.product
  }

  populateProducts() {

    this.productService.allProducts().switchMap(products => {
      this.product = products
      return this.route.queryParamMap
      })
      .subscribe(params => {
        this.category = params.get('category')
        this.applyFilter()
      })
  }

}
