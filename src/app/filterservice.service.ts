import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilterserviceService {

  constructor(private http: HttpClient) { }

  private data;
  private carFaxObjects
  private url

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

  getFilteredPrice = (objs) =>{

    return objs.sort((a,b) => {
      return a.price.replace(/\D/g, '')  - b.price.replace(/\D/g,"") 
    })
   
    /*return this.http.post('http://localhost:3005/price',objs)
    .subscribe(data =>{
      this.carFaxObjects = data
      console.log(`THis is the obj ${this.carFaxObjects}`)
    })*/

  }

  
}
