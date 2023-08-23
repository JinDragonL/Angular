import { NgModule } from "@angular/core";
import { RouterModule, Routes} from '@angular/router';
import { GetProductResolver } from "src/services/handle-get-product-resolver";
import { AdvancedFormComponent } from "./advanced-form/advanced-form.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { CategoryDetailComponent } from "./category/category-detail/category-detail.component";
import { CategoryComponent } from "./category/category.component";
import { CreateUpdateCategoryComponent } from "./category/create-update-category/create-update-category.component";
import { ChangeDetectionStrategyComponent } from "./change-detection-strategy/change-detection-strategy.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { MaterialUiComponent } from "./material-ui/material-ui.component";
import { ObservableComponent } from "./observable/observable.component";
import { Observable2Component } from "./observable2/observable2.component";
import { ProductComponent } from "./product/product.component";
import { TypescriptClassComponent } from "./typescript-class/typescript-class.component";
import { TypescriptInterfaceComponent } from "./typescript-interface/typescript-interface.component";
import { TypescriptComponent } from "./typescript/typescript.component";
import { TypescriptAbstractComponent } from "./typescript-abstract/typescript-abstract.component";

const appRouter: Routes = [
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
    { path: 'advance-form',component: AdvancedFormComponent},
    { path: 'typescript', component: TypescriptComponent},
    { path: 'typescript2', component: TypescriptInterfaceComponent},
    { path: 'typescript-class', component: TypescriptClassComponent},
    { path: 'material', component: MaterialUiComponent},
    { path: 'typescript', component: TypescriptComponent},
    { path: 'typescript', component: TypescriptComponent},
    { path: 'typescript-class', component: TypescriptComponent},
    { path: 'typescript-abstract', component: TypescriptAbstractComponent},
    { path: 'typescript-interface', component: TypescriptInterfaceComponent},
    { path: 'auth', component: AuthenticationComponent},
    { path: '*', component: HomeComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(appRouter)],
    exports: [RouterModule]
})

export class AppRouting {

}