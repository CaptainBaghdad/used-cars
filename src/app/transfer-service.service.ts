import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferServiceService {

  constructor(private http: HttpClient) { }

  private data;
  private carFaxObjects;
  
  setCarFax = () =>{
   return this.http.get('http://localhost:3005/')
   .subscribe(res => {
    this.carFaxObjects = res
   })
  
  }

  setData = (data) => {
    this.data = data
  }
  getData = () => {
    let temp = this.data;
    //this.clearData();
    return temp;
  }

  clearData = () => {
    this.data = undefined;
  }

  getFilteredPrices = () =>{
    let ans = this.getData();
    return this.http.post('http://localhost:3005/price',{ans: ans})
    .subscribe(data =>{
      console.log(`this is the DATA ${Object.values(data['ans'])}`)
    })

  }


}






