import { Component, OnInit } from '@angular/core';
import {HttpClient} from  '@angular/common/http';

@Component({
  selector: 'app-loading',
  template:  `
  <div *ngIf="show; else showData">
<h3>Loading ....</h3>

</div>
<ng-template #showData>
<div *ngFor="let obj of carFaxObjects" 
class="img-holder" 
style="float:right; height: 800px; width:300px"
 > 
  <img 
  className="img-display" 
  style="border:3px solid black; width:275px; margin-top:35px; height:300px;" 
  src="{{obj.pic}}" 
  alt="no data" />
  <br/>
  <p>
    <span>{{obj.name}}</span>
  </p>
  <br/>
  <p> <span>{{obj.price}}</span></p>
  <br />
<p> <span> m1{{obj.multi[0]}}</span></p>
<br />
<p> <span>m2 {{obj.multi[1]}}</span></p>
<br />
<p> <span>m3 {{obj.multi[2]}}</span></p>
<br />
<p> <span>m4 {{obj.multi[3]}}</span></p>
<br />
<button (click)="addCar($event, obj)" id={{obj.name}}>Select</button>
  
</div>




</ng-template>
  
  
  `,
  styleUrls: ['./loading.component.sass']
})


export class LoadingComponent implements OnInit {
  words: String = "Loading...."
  carFaxObjects: Array<any>;
  show: Boolean = true


  constructor(private http: HttpClient) { }

  addCar = (event,obj) =>{
    let userName = localStorage.getItem('name');
    let sendData = {};
    if (userName !== ''){
      sendData['name'] = userName;
      sendData['selectedCar'] = obj
      return this.http.post(`http://localhost:3005/usercars`, sendData)
    .subscribe((obj) =>{
      //console.log(obj)

    })


    }
    
    

  }

  ngOnInit() {
    
    fetch('http://localhost:3005/')
    .then(res => res.json())
    .then( data => {
      this.carFaxObjects = data 
      this.show = false;

      
      console.log(`THis is the carFax ${Object.keys(this.carFaxObjects)}`);
    })




  }

}
