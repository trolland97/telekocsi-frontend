import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Telekocsi';
  login$;

  constructor (private authService:AuthService) { }

  ngOnInit () {
    this.login$ = this.authService.getLogin();
  }

}


