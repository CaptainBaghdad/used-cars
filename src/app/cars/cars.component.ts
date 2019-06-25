import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styles: ['.cars-img {height: 150px; width: 300px;} #show-cars {margin-top:20px; color: black;}']
})
export class CarsComponent implements OnInit {
  isLogged = false;

  constructor(private http: HttpClient,private router: Router) { 
    localStorage.getItem('name') !== "" ? this.isLogged = true : this.isLogged = false;
  }
 allUsers;
 carObjectId;
 editId;
 url;
 getAllCars = () =>{
  
  let name = localStorage.getItem('name')
  
  return this.http.get(`http://localhost:3005/allcars`, { headers: new HttpHeaders({'name': name})
})
  .subscribe(data =>{
    let showcars = document.getElementById('show-cars');
    showcars.style.display = "none";
    
    this.allUsers = data
  })
}

handleDelete = (event) =>{
  
  let del = event.target.id;
  if(del !== ""){
    this.carObjectId = del;
   
   return this.http.delete(`http://localhost:3005/delete/${del}`)
  .subscribe(data =>{

  })

  }
  
  
}

handleEdit = (event) =>{
let ed = event.target.id;
this.router.navigate([`edit/${ed}`])
}

ngOnInit() {
let name = localStorage.getItem('name');
this.url = 'http://localhost:3005/uploads';
    
return this.http.get(`http://localhost:3005/allcars`, { headers: new HttpHeaders({'name': name})
})
  .subscribe(data =>{
    this.allUsers = data
    })
  }

}
