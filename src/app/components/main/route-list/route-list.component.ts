import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRoute } from 'src/app/models/route.model';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.scss']
})
export class RouteListComponent implements OnInit {

  routes$: Observable<IRoute[]>;
  originalRoutes$: Observable<IRoute[]>;

  constructor(private routeService: RouteService) { }

  ngOnInit() {
    this.routes$ = this.routeService.listStaticRoutes();
  }

  filter(from, where, when, quantity) {
    this.originalRoutes$ = this.routes$;
    this.routes$.pipe(map(routes => {
      routes.filter(route => { route.from == from })
    }));

    console.log(this.routes$);
  }

}
