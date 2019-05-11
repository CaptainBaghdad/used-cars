import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { TransferServiceService} from '../transfer-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {
 
 
  colorArray: Array<any> = [];
  carFaxObjects;
  

  constructor(private http: HttpClient, private transfer: TransferServiceService) { }

  handleClick = () => {

  }

  handleChange = (event) =>{
    let ans  = event.target.value;
    console.log(`this is the ans from the filter ${ans}`)
    this.transfer.setData(ans)
    
   
  }

  


  ngOnInit() {
   //this.carFaxObjects = this.transfer.setCarFax()
  }

  ngOnChanges = (changes: SimpleChanges) =>{

  }

}
