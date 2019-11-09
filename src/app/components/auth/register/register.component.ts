import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() login = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  showLogin() {
    this.login.emit(true);
  }

  register(name, email, password, password_again) {
    if(password == password_again){
      console.log("regisztráció......")
    }else {
      alert("Sikertelen regisztráció");
    }
  }

  


}
