import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take'; //pega um value, um item do observable e unsubscribe automatico
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

export class ProductFormComponent implements OnInit {

  product = {}
  categories$;
  types$;
  id;

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) { 

    this.categories$ = categoryService.getCategories()
    

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.productService.getProduct(this.id)
    .take(1).subscribe(p => this.product = p)
    
  }

  ngOnInit() {
    
  }

  save(product) {
    if(this.id) this.productService.updateProduct(this.id, product)
    else this.productService.create(product)

    this.router.navigate(['/admin/products'])
  }

  delete() {
    if(confirm('Are you sure?')) {
      this.productService.deleteProduct(this.id)

      this.router.navigate(['/admin/products'])
    } 
  }



}
