import { CanActivate, Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pipe} from '@angular/core';

import { map,take,tap } from "rxjs/operators";
import 'rxjs/add/observable/from';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AngularFireAuth, private router: Router) {}

    canActivate(): Observable<boolean> {
      return Observable.from(this.auth)
        .take(1)
        .map(state => !!state)
        .do(authenticated => {
      if 
        (!authenticated) this.router.navigate([ '/login' ]);
      })
    }
 
}