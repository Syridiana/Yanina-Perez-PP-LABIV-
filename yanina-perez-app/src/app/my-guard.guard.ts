import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserFirestoreService } from './Servicios/user-firestore-service.service';

@Injectable({
  providedIn: 'root'
})
export class MyGuardGuard implements CanActivate, CanDeactivate<unknown> {
  public currentUser: any;
  
  constructor(private afAuth: AngularFireAuth, private uService: UserFirestoreService) {
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.currentUser = user;
      }
    })

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkUserType();
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
  checkUserType(): boolean{
    return (this.uService.getCurrentUser() === 'admin');
  }

}
