import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdolescentService {

  private url = `http://localhost:8080/api/transaccionalData`;
  private urltutor = 'http://localhost:8084/api/funcionaryData'
  private urlTeen = 'http://localhost:8082/api/teenData/bulk';
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<any>(this.url+"/listData");
  }

  findAlltutor() {
    return this.http.get<any>(this.urltutor+"/listData/active");
  }

  findbyIdTutor(idTutor: any){
    return this.http.get<any>(this.url+"/listIdTutor/"+idTutor);
  }

  UpdateAdolescent(teen: any){
    return this.http.put(`${this.urlTeen}`, teen )
  }
}
