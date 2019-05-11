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
  <optgroup label="filter-prices">
    <option value="cheap" (click)="lowestPrice(carFaxObjects)">Cheapest</option>
    <option value="exspensive">Exspensive</option>
    <option value="between-10-and-20">Between 10,000 and 20,000</option>
    <option value="between-20-and-30">Between 20,000 and 30,000</option>
    <option value="between-30-and-40">Between 30,000 and 40,000</option>
    <option value="between-40-and-50">Between 40,000 and 50,000</option>
    <option value="between-50-and-60">Between 50,000 and 60,000</option>
    <option value="between-60-and-70">Between 60,000 and 70,000</option>
</optgroup>


<option value="price">Price</option>
<option value="color">Color</option>
<option value="mileage">Mileage</option>

</select>


</div>

  
  
  </div>
  <div *ngIf="show; else showData">
<h3>Loading ....</h3>

</div>
<ng-template #showData>
<div *ngFor="let obj of carFaxObjects" 
class="img-holder" 
style="float:left; height: 800px; width:300px"
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
  carFaxObjects;
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
       this.carFaxObjects = this.choice.getFilteredPrice(this.carFaxObjects)
    
        break;

        case 'exspensive':
       this.carFaxObjects = this.choice.getExp(this.carFaxObjects)
    
        break;

        case 'between-10-and-20':
        this.carFaxObjects = this.choice.getBetweenTen(this.carFaxObjects)
        break;

        case 'between-20-and-30':
        this.carFaxObjects = this.choice.getBetweenTwenty(this.carFaxObjects)
        break;

        case 'between-30-and-40':
        this.carFaxObjects = this.choice.getBetweenThirty(this.carFaxObjects)
        break;

        case 'between-40-and-50':
        let len = this.choice.getBetweenFourty(this.carFaxObjects).length
        if(len >= 1){
          this.carFaxObjects = this.choice.getBetweenFourty(this.carFaxObjects)
        }
        //return this.carFaxObjects
        break;

        case 'between-50-and-60':
        let l = this.choice.getBetweenFifty(this.carFaxObjects).length
        if(l >= 1){
        this.carFaxObjects = this.choice.getBetweenFifty(this.carFaxObjects)
        }
        //return this.carFaxObjects
        break;

        case 'between-60-and-70':
        let sixlen = this.choice.getBetweenSixty(this.carFaxObjects).length
        console.log(`606060606 ${sixlen}`)
        if(sixlen >= 1){
          this.carFaxObjects = this.choice.getBetweenSixty(this.carFaxObjects)
        }
       // return this.carFaxObjects
        break;
     
      default:
        return this.carFaxObjects;
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


  lowestPrice = () =>{
    let val  = this.choice.getData();
    console.log(`BIG VAL ${val}`)
    if(val !== ""){
       
      return   this.choice.getFilteredPrice(this.carFaxObjects);
    }
    else{
      return 'NOOOOOOOOO'
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
      
      
      console.log(`THis is the carFax ${Object.keys(this.carFaxObjects)}`);
    })




  }

}
