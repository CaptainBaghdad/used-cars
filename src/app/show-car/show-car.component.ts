import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TransferServiceService} from '../transfer-service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-show-car',
  templateUrl: './show-car.component.html',
  styleUrls: ['./show-car.component.sass']
})
export class ShowCarComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router, private trans: TransferServiceService) { }

  singleCar = {};
  carFaxObjects;
  url;

  


  

  ngOnInit() {
    this.url = this.router.url.replace(/\/car\//g, '')
     this.trans.getSingleCar(this.url)
     .subscribe(data =>{
       this.singleCar = data
     })
     
    
  }



}
