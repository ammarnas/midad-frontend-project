import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserguardGuard implements CanActivate {

  constructor(private router :Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let userid =Number(route.paramMap.get('id'));

      if(isNaN(userid) || userid > 12) {
        alert('user not found');
        this.router.navigate(['/users']);
        return false;
      }
    
      return true;
  }
  
}
