import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-show-car',
  templateUrl: './show-car.component.html',
  styleUrls: ['./show-car.component.sass']
})
export class ShowCarComponent implements OnInit {

  constructor(private http: HttpClient) { }

  singleCar;


  

  ngOnInit() {
  }

}
