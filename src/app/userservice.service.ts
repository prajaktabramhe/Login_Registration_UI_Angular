import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  url: any = "/user";
  constructor(
    private http : HttpServiceService
  ) { }
  loginService(data: any) {
    return this.http.Post(this.url + '/login', data, this.options);
  }

  registerService(){}

  forgotPassword(){}

}
