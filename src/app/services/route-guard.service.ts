import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private authencate: AuthenticateService,
              private router:Router) { }
              
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.authencate.isUserLoggedIn()){
      return true
    }
    this.router.navigate(['login'])
    return false
    
  }
}
