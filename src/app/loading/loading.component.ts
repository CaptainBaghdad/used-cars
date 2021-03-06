import { Component, OnInit, Input, Output } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {FilterComponent} from '../filter/filter.component';
import {HeaderComponent} from '../header/header.component';
import {TransferServiceService} from '../transfer-service.service';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-loading',
  template:  `
  
  <div *ngIf="show; else showData">
<h3>Loading ....</h3>

</div>



<div id="main-div">
<ng-template #showData>
<app-header></app-header>




<select id="car-filter" style="width:300px;  float:left; margin-top:75px;" (change)= "handleChange($event)" class="browser-default">
<option value="" selected>Choose a filter</option>
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


 
<div *ngFor="let obj of carFaxObjects">

<div id ="cizard" class="card" style="width:800px; float: right; margin-left:25px; margin-top:75px;" >
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="{{obj?.pic}}" alt="no pic" style="height: 150px; width: 200px;">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">{{obj.name}}<i class="material-icons right">add_box</i></span>
      
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Full Specs<i class="material-icons right">close</i></span>
      <span style="margin-right:12px;"><i class="small material-icons">attach_money</i>{{obj.price}}</span>
    
      
      <span style="margin-right:12px;"><i class="small material-icons" style="margin-right: 12px;">insert_chart</i>{{obj.multi[0]}}</span>
      
      <span style="margin-right:12px;"><i class="small material-icons" style="margin-right: 12px;">directions_car</i>{{obj.multi[1]}}</span>
      
      <span style="margin-right:12px;"><i class="small material-icons" style="margin-right: 12px;">palette</i>{{obj.multi[2]}}</span>
      
      <span style="margin-right:10px;"><i class="small material-icons" style="margin-right: 10px;">build</i>{{obj.multi[3]}}</span>
      
      <br/>
      <p class="desc">{{obj.description}}</p>

     <!-- <button (click)="showCar($event, obj)" id={{obj._id}} class="btn btn-info">Show Details</button>-->
    </div>
  </div>
 

</div>




</ng-template>
</div>





  
  `,
  styles: ['.card:hover {background:#dbe8ff;} img {padding: 12px;} .card {margin-right: 30px;} #main-div {background: blue;} .desc {margin-top: 50px;}']
})


export class LoadingComponent implements OnInit {
  words: String = "Loading...."
  carFaxObjects;
  defaultCars;
  show: Boolean = true;
  data = this.choice.getData();
  singleObj;
  isLogged = false;
  


  constructor(private http: HttpClient, private choice: TransferServiceService, private router: Router) { 
    document.body.style.background = '#cbd9ef';
    localStorage.getItem('name') !== "" ? this.isLogged = true : this.isLogged = false;


  }

  
  handleChange = (event) => {
    let ans  = event.target.value;
    
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


  showCar = (event,obj) =>{
    let carId = event.target.id;
    this.router.navigate([`car/${carId}`])

   }


  
  ngOnInit() {
    
 
    
    fetch('http://localhost:3005/')
    .then(res => res.json())
    .then( data => {
      this.carFaxObjects = data 
      this.show = false;
      this.defaultCars = data
      localStorage.getItem('token') !== "" ? this.isLogged = true : this.isLogged = false;
      
      
      
    })




  }

}
