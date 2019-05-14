import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashBoardServiceService {
  name: String

  constructor(private http: HttpClient) {
    
   }

   setUser = (user) =>{
     this.name = user

   }
  
  sendNewCar = (obj) =>{
    
      if(obj.name !== ""){
        return this.http.post('http://localhost:3005/newcar',obj)
        .subscribe(data =>{

        })

      }


  }


}
