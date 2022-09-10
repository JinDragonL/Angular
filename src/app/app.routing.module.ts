import { NgModule } from "@angular/core";
import { RouterModule} from '@angular/router';
import { GetProductResolver } from "src/services/handle-get-product-resolver";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { CategoryDetailComponent } from "./category/category-detail/category-detail.component";
import { CategoryComponent } from "./category/category.component";
import { CreateUpdateCategoryComponent } from "./category/create-update-category/create-update-category.component";
import { ChangeDetectionStrategyComponent } from "./change-detection-strategy/change-detection-strategy.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { ObservableComponent } from "./observable/observable.component";
import { Observable2Component } from "./observable2/observable2.component";
import { ProductComponent } from "./product/product.component";

const appRouter = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home',component: HomeComponent},
    { path: 'category',component: CategoryComponent, 
        // canActivate: [AuthguardService],
        // canActivateChild:[AuthguardService],
        // children: [
        //     { path: 'category/createupdate',component: CreateUpdateCategoryComponent},
        //     { path: 'category/createupdate/:id',component: CreateUpdateCategoryComponent}
        // ]
    },
    { path: 'category/createupdate',component: CreateUpdateCategoryComponent},
    { path: 'category/createupdate/:id',component: CreateUpdateCategoryComponent},
    { 
        path: 'category/detail/:id',
        component: CategoryDetailComponent,
        resolve: {
           dataProducts: GetProductResolver
        }
    },
    { path: 'product',component: ProductComponent},
    { path: 'contact',component: ContactComponent},
    { path: 'login',component: AuthenticationComponent},
    { path: 'observable',component: ObservableComponent},
    { path: 'observable-2',component: Observable2Component},
    { path: 'detection',component: ChangeDetectionStrategyComponent},
    { path: '*', component: HomeComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(appRouter)],
    exports: [RouterModule]
})

export class AppRouting {

}