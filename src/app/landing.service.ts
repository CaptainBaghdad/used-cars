import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Promise } from 'q';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  carFaxObjects;
  url = 'http://localhost:3005/';


  constructor(private http: HttpClient) { }
  
  getLandingData = () => {
    return this.http.get(`${this.url}`)
    .subscribe(res => {

      this.carFaxObjects = res
    })
    

  }
}
