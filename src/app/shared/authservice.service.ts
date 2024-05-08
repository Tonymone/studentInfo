import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  userData: any;

  usersCollection: AngularFirestoreCollection<any>;
  constructor(
    public afStore: AngularFirestore,
    private ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    
    this.usersCollection = this.afStore.collection('users');

  }
  // Login in with email/password
  SignIn(email: any, password: any) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }
  // Register user with email/password
  RegisterUser(name:any,email: any, password: any) {
    this.afStore.collection("users").add({
      name: name,
      email: email,
      password: password
    });
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }
  // Sign-out
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }

 // Fetch all users from Firestore
 getUsers(): Observable<any[]> {
  return this.usersCollection.valueChanges();
}

  // Fetch a specific user from Firestore by ID
  getUserById(userId: string): Observable<any> {
    return this.usersCollection.doc(userId).valueChanges();
  }
   // Get the current user
   getCurrentUser(): Observable<any> {
    return this.ngFireAuth.authState;
  }
}
