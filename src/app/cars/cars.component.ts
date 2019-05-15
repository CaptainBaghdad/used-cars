import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.sass']
})
export class CarsComponent implements OnInit {

  constructor(private http: HttpClient) { }
 allUsers;
 carObjectId;
 editId;
getAllCars = () =>{
  //let header:HttpHeaders = new HttpHeaders();
  let name = localStorage.getItem('name')
  //header = header.set('token', token)
  return this.http.get(`http://localhost:3005/allcars`, { headers: new HttpHeaders({'name': name})
})
  .subscribe(data =>{
    console.log(`BIG DATA ${data}`)
    this.allUsers = data
  })
}

handleDelete = (event) =>{
  console.log(event.target.id)
  let del = event.target.id;
  if(del !== ""){
    this.carObjectId = del;
    //let del = new HttpParams().set('del', collectionToDelete);
  //console.log(del)
  
  return this.http.delete(`http://localhost:3005/delete/${del}`)
  .subscribe(data =>{
    console.log(Object.keys(data))
  })

  }
  console.log(`WHAT DEM DUE ${del}`)
  
}

handleEdit = (event) =>{
  console.log(event.target.id)
  let ed = event.target.id;
  if(ed !== ""){
    this.editId = ed;
    //let del = new HttpParams().set('del', collectionToDelete);
  //console.log(del)
  
  return this.http.delete(`http://localhost:3005/edit/${ed}`)
  .subscribe(data =>{
    console.log(Object.keys(data))
  })

  }
  console.log(`WHAT DEM DUE ${ed}`)

}

  ngOnInit() {
    let name = localStorage.getItem('name')
    //header = header.set('token', token)
    return this.http.get(`http://localhost:3005/allcars`, { headers: new HttpHeaders({'name': name})
  })
    .subscribe(data =>{
      console.log(`BIG DATA ${data}`)
      this.allUsers = data
    })
  }

}
