import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;


  constructor(private authService: AuthService,
              private route: Router,
              private formBuilder: FormBuilder,
              private userService: UserService) { 

      this.form = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
      })

  }

  ngOnInit() {

  }

  createUser() {
    const inputValue = this.form.value
    this.authService.createUser(inputValue.email, inputValue.password)
    this.route.navigate(['/'])

  }

  loginUser() {
    const inputValue = this.form.value
    this.authService.loginUser(inputValue.email, inputValue.password)
    this.route.navigate(['/'])
 
  }

  loginGoogle() {
    this.authService.loginGoogle()
  }

}
