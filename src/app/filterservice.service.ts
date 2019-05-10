import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilterserviceService {

  constructor(private http: HttpClient) { }

  private data;

  setData = (data) =>{
    this.data = data
  }

  getData = () =>{
    let temp = this.data;
    this.clearData();
    return temp;
  }

  clearData = () => {
    this.data = undefined;
  }

  getFilteredPrice = (obj) =>{
   
    return this.http.post('http://localhost:3005/price',obj)
    .subscribe(data =>{
      console.log(`THis is the obj ${obj.ans}`)
    })

  }
}
