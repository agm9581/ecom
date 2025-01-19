import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(
    !!localStorage.getItem('auth')
  );
  loggedIn$ = this.loggedInSubject.asObservable();

  //To do with normal password base authorization and afterwards with JWT
  login() {
    localStorage.setItem('auth', 'mockedLogin');
    this.loggedInSubject.next(true);
  }

  logout() {
    localStorage.removeItem('auth');
    this.loggedInSubject.next(false);
  }
}
