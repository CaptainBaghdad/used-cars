import { Component } from '@angular/core';
//let ineed = require('ineed');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ang-seven';
  carFaxObjects = [];
  mainHeading = "Main Heading";
  
  /*someData = [{
    title: 'First Car',
    image: 'book-2.jpg',
    price: 5000,
  description:'Car ones description'
  },
  {
    title: 'Second  Car',
    image: 'book-3.jpg',
    price: 8000,
  description:'Car twos description'
  },
  {
    title: 'Third Car',
    image: 'book-4.jpg',
    price: 4800,
  description:'Car threes description'
  },
  {
    title: 'Fourth Car',
    image: 'book-5.jpg',
    price: 10000,
  description:'Car Fours description'
  },
  {
    title: 'Fifth Car',
    image: 'book-6.jpg',
    price: 3600,
  description:'Car Fives description'
  },
  {
    title: 'Sixth Car',
    image: 'chrysler.jpg',
    price: 4799,
  description:'Car Sixs description'
  },
  {
    title: 'Seveth Car',
    image: 'cloud.jpg',
    price: 23000,
  description:'Car Sevens description'
  },
  {
    title: 'Eighth Car',
    image: 'empire.jpg',
    price:  7383,
  description:'Car Eighths description'
  },
  {
    title: 'Ninths Car',
    image: 'Gucci-hat.jpg',
    price: 8008,
  description:'Car Nines description'
  },






];*/
  
ngOnInit(){
    fetch('http://localhost:3005/')
    .then(res => res.json())
    .then( data => {
      this.carFaxObjects = data
      //console.log(`This is the Data : ${data[2]}`);
      console.log(`THis is the carFax ${Object.keys(this.carFaxObjects)}`);
    })

   //fetch('https://www.carfax.com/Used-Cars-in-New-York-NY_c8636')
    //.then(res => {
     // console.log(`FETCH DID THIS ${res.length}`)

    //})
    




   
  }
}
