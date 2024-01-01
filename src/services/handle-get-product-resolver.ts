import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ProductService } from "./product.service";

@Injectable()
export class GetProductResolver  {
    
    constructor(private _productService: ProductService){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const categoryId = route.params["id"];
        return this._productService.getByCategoryId(categoryId);
    }

}