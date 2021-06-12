import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  
baseUrl = environment.baseurl;
  constructor(
    private httpClient : HttpClient
  ) { }
  Post(url: any, data: any, options: any){
    return this.httpClient.post(this.baseUrl + url, data, options);
  }

  Put(url: any, data: any, options: any){
    return this.httpClient.put(this.baseUrl + url, data, options);
  }

}
