import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { constant } from '../utilitis/constant';




@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {
  constant = new constant();
  api_url = this.constant.routeGlobal;

  constructor(private http: HttpClient,) { }

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

  number(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/number`, params);
  }

  save_certificate(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/save_certificate`, params);
  }
  ViewImage(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/ViewImage`, params);
  }

  SaveService(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/SaveService`, params);
  }

  type_red(params): Observable<any> {

    return this.http.post(`${this.api_url}list/list_type_network`, params);

  }

  SaveCliente(params): Observable<any> {
    return this.http.post(`${this.api_url}client/create`, params);
  }

  ListClient(page): Observable<any> {
    return this.http.get(`${this.api_url}movil/ListClient?page=${page}`);
  }

  AutoListClient(client): Observable<any> {
    return this.http.get(`${this.api_url}movil/AutoListClient?client=${client}`);
  }

  AutoLisAddress(address, id, user, type): Observable<any> {
    return this.http.get(`${this.api_url}movil/AutoLisAddress?address=${address}&id=${id}&user=${user}&type=${type}`);
  }

  ListAcount(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/ListAcount`, params);
  }

  CreateAcount(params): Observable<any> {
    return this.http.post(`${this.api_url}client/create_account`, params);
  }

  ListCity(page): Observable<any> {

    return this.http.get(`${this.api_url}movil/ListCity?page=${page}`);
  }

  AutoCity(city): Observable<any> {
    return this.http.get(`${this.api_url}movil/AutoCity?city=${city}`);
  }
  ListMaterial(page): Observable<any> {
    return this.http.get(`${this.api_url}movil/ListMaterial?page=${page}`);
  }

  AutoListMaterial(material): Observable<any> {
    return this.http.get(`${this.api_url}movil/AutoListMaterial?material=${material}`);
  }

  CreateMaterial(params): Observable<any> {
    return this.http.post(`${this.api_url}materials/savemovil`, params);
  }
  MaterialCertificate(material): Observable<any> {
    return this.http.get(`${this.api_url}movil/MaterialCertificate?material=${material}`);
  }

  ListBuilder(page): Observable<any> {
    return this.http.get(`${this.api_url}movil/ListBuilder?page=${page}`);
  }

  AutoListBuilder(material): Observable<any> {
    return this.http.get(`${this.api_url}movil/AutoListBuilder?builder=${material}`);
  }

  listsic(builder): Observable<any> {
    return this.http.get(`${this.api_url}movil/listsic?builder=${builder}`);
  }
  listcom(builder): Observable<any> {
    return this.http.get(`${this.api_url}movil/listcom?builder=${builder}`);
  }

  SevaBuilder(params): Observable<any> {
    return this.http.post(`${this.api_url}builder/create`, params);
  }

  search_address(address): Observable<any> {
    return this.http.get(`${this.api_url}movil/search_address?address=${address}`);
  }

  certificate_material(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/certificate_material`, params);
  }

  sic_builder(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/sic_builder`, params);
  }

  com_builder(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/com_builder`, params);
  }

  change_state(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/change_state`, params);
  }
  change_active(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/change_active`, params);
  }
  change_active_service(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/change_active_service`, params);
  }

  SearchImageOdi(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/search_image_odi`, params);
  }


  SearchMaterial(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/search_material`, params);
  }

  type_red_total(): Observable<any> {
    return this.http.get(`${this.api_url}list/list_type_network_total`);
  }

  search_client(): Observable<any> {
    return this.http.get(`${this.api_url}client/search`);
  }

  search_account(): Observable<any> {
    return this.http.get(`${this.api_url}client/searchaccount`);
  }

  city(): Observable<any> {
    let params;
    return this.http.post(`${this.api_url}movil/city`, params);
  }

  imageoffline(): Observable<any> {
    return this.http.get(`${this.api_url}movil/imageoffline`);
  }

  builderOffline(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/builderoffline`, params);
  }

  ClientOffline(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/clientoffline`, params);
  }

  AcountOffline(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/acountoffline`, params);
  }

  MaterialOffline(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/materialoffline`, params);
  }

  OdiOffline(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/odioffline`, params);
  }

  CertificateOffline(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/certificateoffline`, params);
  }

  copy_image(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/copy_image`, params);
  }

  inspectores(params): Observable<any> {
    return this.http.post(`${this.api_url}movil/inspectores`, params);
  }




}
