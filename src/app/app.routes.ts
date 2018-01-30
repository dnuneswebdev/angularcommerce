import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MenComponent } from "./men/men.component";
import { WomenComponent } from "./women/women.component";
import { AccessoriesComponent } from "./accessories/accessories.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { OrderComponent } from "./order/order.component";
import { LoginComponent } from "./login/login.component";
import { AdminProductsComponent } from "./admin/admin-products/admin-products.component";
import { ProductFormComponent } from "./admin/product-form/product-form.component";
import { AuthService } from "./services/auth.service";



export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'men', component: MenComponent},


    {path: 'women', component: WomenComponent},


    {path: 'accessories', component: AccessoriesComponent},
    {path: 'products/:id', component: ProductDetailComponent},
    {path: 'order', component: OrderComponent},


    {path: 'login', component: LoginComponent},
    {path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthService]},
    {path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthService]},
    {path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthService]},


]