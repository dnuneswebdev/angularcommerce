import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router"
import { ROUTES } from "./app.routes";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProductsComponent } from './products/products.component';
import { MenComponent } from './men/men.component';
import { ShortsComponent } from './men/shorts/shorts.component';
import { ShirtsComponent } from './men/shirts/shirts.component';
import { WomenComponent } from './women/women.component';
import { TopsComponent } from './women/tops/tops.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component'

//SERVICES
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    NavMenuComponent,
    ProductsComponent,
    MenComponent,
    ShortsComponent,
    ShirtsComponent,
    WomenComponent,
    TopsComponent,
    AccessoriesComponent,
    ProductDetailComponent,
    ProductCardComponent,
    FooterComponent,
    HeroComponent,
    OrderComponent,
    LoginComponent,
    AdminProductsComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
     
  ],
  providers: [AuthService, 
              UserService,
              CategoryService,
              ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
