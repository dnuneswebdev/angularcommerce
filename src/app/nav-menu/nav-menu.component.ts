import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../services/category.service';



@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})


export class NavMenuComponent implements OnInit {

  
  categories$;
  
  @Input('category') category

  constructor(private categoryService: CategoryService) { 

      this.categories$ = categoryService.getCategories()
      
  }

  ngOnInit() {
    
  }

}
