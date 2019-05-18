import { Component, OnInit, Input, Output } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {FilterComponent} from '../filter/filter.component';
import {TransferServiceService} from '../transfer-service.service';

@Component({
  selector: 'app-loading',
  template:  `
  <div id="filter-main">
  <div>
<select id="car-filter" (change)= "handleChange($event)">
  <option value="" selected>Please choose a filter</option>
  <optgroup label="Price">
    <option value="cheap" >Cheapest</option>
    <option value="exspensive">Exspensive</option>
    <option value="between-10-and-20">Between 10,000 and 20,000</option>
    <option value="between-20-and-30">Between 20,000 and 30,000</option>
    <option value="between-30-and-40">Between 30,000 and 40,000</option>
    <option value="between-40-and-50">Between 40,000 and 50,000</option>
    <option value="between-50-and-60">Between 50,000 and 60,000</option>
    <option value="between-60-and-70">Between 60,000 and 70,000</option>
</optgroup>


<optgroup label="Color">
  <option value="black">Black</option>
  <option value="white">White</option>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="gray">Gray</option>
  <option value="other">Other</option>
</optgroup>
<optgroup label="Mileage">
<option value="lowest">Lowest</option>
<option value="less-than-20">Less than 20,000</option>
<option value="less-than-40">Less than 40000</option>

</optgroup>



</select>


</div>

  
  
  </div>


  <div *ngIf="show; else showData">
<h3>Loading ....</h3>

</div>
<div class="row" id="show-car-item"  style="background: gray;">
<div class="col-md-8" style="background: white; margin: 10px;">
<ng-template #showData>



<div *ngFor="let obj of carFaxObjects"><!-- --> 
<mat-card >

<div id="card-img-holder" style="width:">
<img mat-card-lg-image
   
  src="{{obj.pic}}" 
  alt="no data" 
  style="height:344px; width:258px;"
  />

  <li  style="display: inline-box;list-style:none;">
  <mat-card-title><span>{{obj.name}}</span></mat-card-title>
  </li>
 
  <li  style="display: inline-box;list-style:none;"> 
  <mat-card-subtitle>
  <span style="display: inline-block; list-style:none;">
  {{obj.price}}
  </span>
  </mat-card-subtitle>
  </li>

</div><!--end of card-img-holer-->
  
  
  

<li  style="display: inline-block;list-style:none;"> 
<mat-card-subtitle>
<span style="display: inline-block;list-style:none;">
 m1{{obj.multi[0]}}
 </span>
 </mat-card-subtitle>
 </li>

<li  style="display: inline-block;list-style:none;">
<mat-card-subtitle>
 <span style="display: inline-block; list-style:none;">
 m2 {{obj.multi[1]}}
 </span>
 </mat-card-subtitle>
 </li>

<li  style="display: inline-block;list-style:none;">
<mat-card-subtitle>
 <span style="display:inline-block; list-style:none;">
 m3 {{obj.multi[2]}}
 </span>
 </mat-card-subtitle>
 </li>

<li  style="display: inline-block;list-style:none;">
<mat-card-subtitle>
 <span style="display: inline-block list-style:none;;">
 m4 {{obj.multi[3]}}
 </span>
 </mat-card-subtitle>
 </li>

<button (click)="addCar($event, obj)" id={{obj.name}} class="btn btn-danger">Select</button>
</mat-card> 
</div>
 





</ng-template>
</div>
</div>
  
  `,
  styleUrls: ['./loading.component.sass']
})


export class LoadingComponent implements OnInit {
  words: String = "Loading...."
  carFaxObjects;
  defaultCars;
  show: Boolean = true;
  data = this.choice.getData();
  


  constructor(private http: HttpClient, private choice: TransferServiceService) { 
    /*if(this.data){
      console.log(`This is from the filter Service ${this.data}`)
    }

    else{
      console.log(`No sir`);
    }*/


  }

  
  handleChange = (event) =>{
    let ans  = event.target.value;
    console.log(`this is the ans from the filter ${ans}`)
    this.choice.setData(ans)

    switch (ans) {
      case 'cheap':
       this.carFaxObjects = this.choice.getFilteredPrice(this.defaultCars)
    
        break;

        case 'exspensive':
       this.carFaxObjects = this.choice.getExp(this.defaultCars)
    
        break;

        case 'between-10-and-20':
        this.carFaxObjects = this.choice.getBetweenTen(this.defaultCars)
        break;

        case 'between-20-and-30':
        this.carFaxObjects = this.choice.getBetweenTwenty(this.defaultCars)
        break;

        case 'between-30-and-40':
        this.carFaxObjects = this.choice.getBetweenThirty(this.defaultCars)
        break;

        case 'between-40-and-50':
        let len = this.choice.getBetweenFourty(this.defaultCars).length
        if(len >= 1){
          this.carFaxObjects = this.choice.getBetweenFourty(this.defaultCars)
        }
        this.carFaxObjects =  this.defaultCars
        break;

        case 'between-50-and-60':
        let l = this.choice.getBetweenFifty(this.defaultCars).length
        if(l >= 1){
        this.carFaxObjects = this.choice.getBetweenFifty(this.defaultCars)
        }
        this.carFaxObjects =  this.defaultCars
        break;

        case 'between-60-and-70':
        let sixlen = this.choice.getBetweenSixty(this.defaultCars).length
        console.log(`606060606 ${sixlen}`)
        if(sixlen >= 1){
          this.carFaxObjects = this.choice.getBetweenSixty(this.defaultCars)
        }
        this.carFaxObjects =  this.defaultCars
        break;

        case 'black':
        this.carFaxObjects = this.choice.getBlackCars(this.defaultCars)
        break;

        case 'white':
        this.carFaxObjects = this.choice.getWhiteCars(this.defaultCars)
        break;

        case 'red':
        this.carFaxObjects = this.choice.getRedCars(this.defaultCars)
        break;

        case 'blue':
        this.carFaxObjects = this.choice.getBlueCars(this.defaultCars)
        break;

        case 'gray':
        this.carFaxObjects = this.choice.getGrayCars(this.defaultCars)
        break;

        case 'other':
        this.carFaxObjects = this.choice.getOtherCars(this.defaultCars)
        break;

        case 'lowest':
        this.carFaxObjects = this.choice.getLowestMileage(this.defaultCars);
        break;
        case 'less-than-20':
        this.carFaxObjects = this.choice.getLessThanTwenty(this.defaultCars)
        break;

        case 'less-than-40':
        this.carFaxObjects = this.choice.getLessThanFourty(this.defaultCars)
        break;
      default:
      this.carFaxObjects =  this.defaultCars ;
    }
    
   
  }
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
    //let val = JSON.stringify(this.choice.setCarFax());
    
    
  // console.log(`NG INIT ${ this.choice.setCarFax()}`)
   //this.show = false
    
    //console.log(`THIS IS THE INIT ${Object.keys(this.carFaxObjects)}`)
    //this.choice.getFilteredPrices()


    
    fetch('http://localhost:3005/')
    .then(res => res.json())
    .then( data => {
      this.carFaxObjects = data 
      this.show = false;
      this.defaultCars = data
      
      
      console.log(`THis is the carFax ${Object.keys(this.carFaxObjects)}`);
    })




  }

}
