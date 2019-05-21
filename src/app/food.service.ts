import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization:
      "Bearer iAZg8D2K9qzHWdA8Q9Y5YyWvfNepmfic8F_XNgqjxvOEXU-VLFq_AdPSbaM1MuzCOENtfCqgmZztVLoffJx2q2O7lQ33LQU9lbNT8SHAudhztWodF-Le-jZgNhvkXHYx"
  })
};
@Injectable({
  providedIn: "root"
})
export class FoodService {
  private db = "http://localhost:3300/food/";

  constructor(private http: HttpClient) {}

  getPlaces(city, state, price): Observable<any> {
    return this.http.get<any>(
      `http://localhost:3300/food/${city}/${state}/${price}`,
      httpOptions
    );
  }
}
