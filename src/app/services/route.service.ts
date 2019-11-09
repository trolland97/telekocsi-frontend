import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRoute } from '../models/route.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  private url = "http://localhost:8080/route";
  private routes$ = new BehaviorSubject<IRoute[]>(null);

  constructor(private http: HttpClient) {
    let routes: IRoute[] = [
      { "sofor": "Xavér",
        "from": "Szeged",
        "to": "Zenta",
        "when": new Date(),
        "arrives": new Date(),
        "capacity": 1,
        "price": 1000,
        "car": "BMW",
        "car_type": "320",
        "plate": "BC-022-PZ",
        "color": "Fekete"
      },
      { "sofor": "Xavér",
        "from": "Szeged",
        "to": "Zenta",
        "when": new Date(),
        "arrives": new Date(),
        "capacity": 1,
        "price": 1000,
        "car": "BMW",
        "car_type": "320",
        "plate": "BC-022-PZ",
        "color": "Fekete"
      },
      { "sofor": "Xavér",
        "from": "Szeged",
        "to": "Zenta",
        "when": new Date(),
        "arrives": new Date(),
        "capacity": 1,
        "price": 1000,
        "car": "BMW",
        "car_type": "320",
        "plate": "BC-022-PZ",
        "color": "Fekete"
      }
    ]
    this.routes$.next(routes);
  }

  listRoutes() {
    return this.http.get(this.url);
  }

  listStaticRoutes() {
    return this.routes$;
  }

  createRoute(route: IRoute) {
    this.http.post(this.url, { route }).subscribe();
  }

  updateRoute(id: number, route: IRoute) {
    this.http.put(this.url + "/" + id, { route }).subscribe();
  }

  deleteRoute(id: number) {
    this.http.delete(this.url + "/" + id).subscribe();
  }
}
