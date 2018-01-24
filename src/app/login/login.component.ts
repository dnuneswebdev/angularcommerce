import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;


  constructor(private authService: AuthService,
              private route: Router,
              private formBuilder: FormBuilder) { 

      this.form = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      })

  }

  ngOnInit() {

  }

  createUser() {
    const inputValue = this.form.value
    this.authService.createUser(inputValue.email, inputValue.password)
  }

  loginUser() {
    const inputValue = this.form.value
    console.log(inputValue)
    this.authService.loginUser(inputValue.email, inputValue.password)
    .subscribe(
      success => this.route.navigate(['/']),
      error => alert(error)
    )
  }

  loginGoogle() {
    this.authService.loginGoogle()
  }

}
