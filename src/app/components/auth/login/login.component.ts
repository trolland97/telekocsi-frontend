import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() register = new EventEmitter<boolean>();

 

  constructor(private authService:AuthService, private router: Router) { }

  showRegister() {
    this.register.emit(true);
  }

  ngOnInit() {
  }

  login(email, password) {
    console.log(email, password);
    if(email == 'admin@admin.hu' && password == 'admin'){
      this.authService.login();
    }else {
      alert("Sikertelen bejelentkezés");
    }
  }
  }
  
  
 

