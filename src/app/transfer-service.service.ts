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
    let ans;
    console.log(`SETCARFAX ran`)
   fetch('http://localhost:3005/')
   .then(res => res.json())
   .then(d => {
    console.log(`GEEEEZ ${d}`)
    ans = d
    return ans
     
   })
   
     //let val  = JSON.stringify(res)
    //this.carFaxObjects = val 
    //return this.carFaxObjects
  
  //return this.carFaxObjects
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

 getExp = (objs) =>{
  return objs.sort((a,b) => {
    return b.price.replace(/\D/g, '')  - a.price.replace(/\D/g,"") 
  })
 }

  getFilteredPrice = (objs) =>{

    return objs.sort((a,b) => {
      return a.price.replace(/\D/g, '')  - b.price.replace(/\D/g,"") 
    })
   }

   getBetweenTen = (objs) =>{
    return objs.filter((obj) => {
     return  obj.price.replace(/\D/g, '') > 10000 && obj.price.replace(/\D/g, '') < 20000 
    })

   }

   getBetweenTwenty = (objs) =>{
    return objs.filter((obj) => {
     return  obj.price.replace(/\D/g, '') > 20000 && obj.price.replace(/\D/g, '') < 30000 
    })

   }

   getBetweenThirty = (objs) =>{
    return objs.filter((obj) => {
     return  obj.price.replace(/\D/g, '') > 30000 && obj.price.replace(/\D/g, '') < 40000 
    })

   }

   getBetweenFourty = (objs) =>{
    return objs.filter((obj) => {
     return  obj.price.replace(/\D/g, '') > 40000 && obj.price.replace(/\D/g, '') < 50000 
    })

   } 

   getBetweenFifty = (objs) =>{
    return objs.filter((obj) => {
     return  obj.price.replace(/\D/g, '') > 50000 && obj.price.replace(/\D/g, '') < 60000 
    })

   }

   getBetweenSixty = (objs) =>{
    return objs.filter((obj) => {
     return  obj.price.replace(/\D/g, '') > 60000 && obj.price.replace(/\D/g, '') < 70000 
    })

   }







}

