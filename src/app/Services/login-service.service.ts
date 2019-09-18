import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  api_url = 'http://192.168.1.126/laravel-mls/public/api/';

  constructor(private http: HttpClient) { }

  save_image(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/image`, params);
  }

  login(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/login`, params);
  }

  totalasignadas(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/totalasignadas`, params);
  }

  seach_asignadas(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/seach_asignadas`, params);
  }

  photos_service(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/photos_service`, params);
  }

  registerToken(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/registerToken`, params);
  }

  search_materials(): Observable<any> {
    return this.http.get(`${this.api_url}movil/search_materials`);
  }
  search_builder(): Observable<any> {
    return this.http.get(`${this.api_url}movil/search_builder`);
  }

  search_certificate(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/search_certificate`, params);
  }
}
