import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';




@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent implements OnInit {

  @Input() product: Product

  constructor() { 

  }

  ngOnInit() {
    
  }

}
