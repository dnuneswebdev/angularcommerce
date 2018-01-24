import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';




@Component({
  selector: 'header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})

export class HeaderComponent implements OnInit {

  
  constructor(public authService: AuthService) { 

  }

  ngOnInit() {

  }

  logout() {
    this.authService.logout()
  }



}
