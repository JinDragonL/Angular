import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ProductService } from "./product.service";

@Injectable()
export class GetProductResolver implements Resolve<any> {
    
    constructor(private _productService: ProductService){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const categoryId = route.params["id"];
        return this._productService.getByCategoryId(categoryId);
    }

}