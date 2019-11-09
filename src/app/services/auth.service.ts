import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logged = new BehaviorSubject<boolean>(false);

  getLogin(){
    return this.logged;
  }

  login(){
    this.logged.next(true);
  }

  logout(){
    this.logged.next(false);
  }

  constructor() { }
}
