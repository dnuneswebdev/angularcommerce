import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MenComponent } from "./men/men.component";
import { WomenComponent } from "./women/women.component";
import { AccessoriesComponent } from "./accessories/accessories.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { OrderComponent } from "./order/order.component";
import { LoginComponent } from "./login/login.component";



export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'men', component: MenComponent},


    {path: 'women', component: WomenComponent},


    {path: 'accessories', component: AccessoriesComponent},
    {path: 'product-detail', component: ProductDetailComponent},
    {path: 'order', component: OrderComponent},


    {path: 'login', component: LoginComponent}

]