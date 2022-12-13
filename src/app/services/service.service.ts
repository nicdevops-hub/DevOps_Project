import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getEmpDetails(){
    return this.http.get<any>(environment.urls.getEmpDetailsUrl)
  }

  getStuDetails(){
    return this.http.get<any>(environment.urls.getStuDetailsUrl)
  }
  saveStuDetails(data : any){
    return this.http.post<any>(environment.urls.saveStuDetailosUrl,data)
  }
}
