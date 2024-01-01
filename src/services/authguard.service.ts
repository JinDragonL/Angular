import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService  {

  constructor(private router: Router) { }
  
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let isLogin = false;

    if(!isLogin){

      this.router.navigate(["login"]); //, { queryParams: { urfDefault: ""} }

      return false;
    }

    return true;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    // handle to call api check if user login

    let isLogin = false;

    if(!isLogin){

      this.router.navigate(["login"]); //, { queryParams: { urfDefault: ""} }

      return false;
    }

    return true;
  }

}
