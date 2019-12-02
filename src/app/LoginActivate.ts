import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Loginservice } from "./login/Loginservice";



@Injectable()
export class LoginActivate implements CanActivate {
  constructor(private authService: Loginservice, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    if (!this.authService.signIn) {
      this.router.navigate(['login']);
    }
    return true;
  }
}