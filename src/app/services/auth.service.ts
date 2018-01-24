import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AppUser } from '../models/user.model';




@Injectable()
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,
              private route: ActivatedRoute) { 

      this.user$ = afAuth.authState            

  }

  createUser(email: string, password: string) {
    const credentials = firebase.auth.EmailAuthProvider.credential(email, password)
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  }
  

  loginUser(email, password): Observable<any> {
    return Observable.fromPromise(
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
    )
    
  }

  loginGoogle() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl)

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut()
  }

}
