import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { CategoryService } from '../services/category.service.service';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../app/category/category.component';
import { ProductComponent } from './product/product.component';
import { CreateUpdateCategoryComponent } from './category/create-update-category/create-update-category.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { HomeService } from 'src/services/home.service';
import { CheckAnimalPipe } from './pipes/check.animal.pipe';
import { ContactComponent } from './contact/contact.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthguardService } from 'src/services/authguard.service';
import { ComponentSystemDirective } from './directives/component.system.directive';
import { ComponentSiteDirective } from './directives/component.site.directive';
import { ObservableComponent } from './observable/observable.component';
import { Observable2Component } from './observable2/observable2.component';
import { ScrollRxjsComponent } from './scroll-rxjs/scroll-rxjs.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { GetProductResolver } from 'src/services/handle-get-product-resolver';
import { TypescriptComponent } from './typescript/typescript.component';
import { ChangeDetectionStrategyComponent } from './change-detection-strategy/change-detection-strategy.component';
import { ChangeDetectionChild1Component } from './change-detection-strategy/change-detection-child1/change-detection-child1.component';
import { ChangeDetectionChild2Component } from './change-detection-strategy/change-detection-child2/change-detection-child2.component';
import { SubCateogoryComponent } from './category/sub-cateogory/sub-cateogory.component';
import { MaterialUiComponent } from './material-ui/material-ui.component';
import { AdvancedFormComponent } from './advanced-form/advanced-form.component';
import { ControlMaterialModule } from 'src/share/control.material';
import { LoadingBarComponent } from 'src/share/components/loading-bar/loading-bar.component';
import { LoadingBarInterceptor } from 'src/helper/loading-bar.interceptor';
import { InterceptorRequest } from 'src/services/interceptor.request';
import { ExpiredTokenPopupComponent } from './expired-token-popup/expired-token-popup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateCoreModule } from './translate.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    ProductComponent,
    CreateUpdateCategoryComponent,
    SlidebarComponent,
    CheckAnimalPipe,
    ContactComponent,
    AuthenticationComponent,
    ComponentSystemDirective,
    ComponentSiteDirective,
    ObservableComponent,
    Observable2Component,
    ScrollRxjsComponent,
    CategoryDetailComponent,
    TypescriptComponent,
    ChangeDetectionStrategyComponent,
    ChangeDetectionChild1Component,
    ChangeDetectionChild2Component,
    SubCateogoryComponent,
    MaterialUiComponent,
    AdvancedFormComponent,
    LoadingBarComponent,
    ExpiredTokenPopupComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRouting,
    BrowserAnimationsModule,
    ControlMaterialModule, 
    TranslateCoreModule
  ],
  providers: [
    CategoryService, 
    HomeService, 
    AuthguardService,
    GetProductResolver,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorRequest, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingBarInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

