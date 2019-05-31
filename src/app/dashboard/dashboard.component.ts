import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import {DashBoardServiceService} from '../dash-board-service.service';
import {MatCardModule} from '@angular/material/card';
import {CarsComponent} from '../cars/cars.component';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: ['.dash-right-section { background: #cbd9ef; }']
})


export class DashboardComponent implements OnInit {
  form:FormGroup
  show: Boolean = true
  editHolder
  fezzy;
  name: String;
  userName;
  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder,
  dashboard: DashBoardServiceService ) { 
    this.form = this.fb.group({
      hval:'',
      file: [],
      price: 0,
      make: '',
      bodytype: '',
      mileage: '',
      color: '',
      engine: '',
      description: ''
   })

  }
   selectedFile;
   
   

   establishUser = (user) =>{

   }

   handleEdit = () =>{
     this.fezzy.style.display = 'block'


   }

   showEditForm = () =>{
    document.getElementById('dash-main-div').style.display = 'inline-block';
    document.getElementById('add-car').style.display = "none";

   }

  ngOnInit() {
    this.show = false
    this.userName = localStorage.getItem('name')
    document.getElementById('dash-main-div').style.display = 'none';
    console.log(`This is the init value of the ng Inti ${this.userName}`)
    this.editHolder = document.getElementById('carEdit')
    this.editHolder.style.display = 'none';

    this.fezzy = document.getElementById('fe')
    this.fezzy.style.display = 'none'
  }

  handleFile = (event) =>{
    console.log(`This is the handle being fired `)
    if (event.target.files.length > 0) {
      const hval = this.userName;
      console.log(`HANDLE FILE This is the hval ${hval}`)
      const file = event.target.files[0];
      console.log(`HANDLE FILE This is the file ${file}`)
      let price = event.target.price.value;
      //console.log(`This is the price ${price}`)
      let make = event.target.make.value;
      console.log(`HANDLE FILE This is the make of the car ${make}`)
      let bodytype = event.target.bodytype.value;
      let color = event.target.color.value;
      let engine = event.target.engine.value;
      let mileage = event.target.mileage.value;
      let description = event.target.description.value
      this.form.get('hval').setValue(hval);
      console.log(`SET VALUE ${this.form.get('hval')}`)
      this.form.get('file').setValue(file);
      this.form.get('price').setValue(price);
      this.form.get('make').setValue(make);
      this.form.get('bodytype').setValue(bodytype);
      this.form.get('milege').setValue(mileage);
      this.form.get('color').setValue(color);
      this.form.get('engine').setValue(engine);
      this.form.get('description').setValue(description);
    }
    

  }

  handleSubmit = () => {
    console.log(`Submit has fired...`)
    const url = 'http://localhost:3005/newcar';
    const formData = new FormData();
    let fh = document.getElementById('dash-main-div');
    formData.append('hval', this.userName)
    formData.append('file', this.form.get('file').value);
   
    formData.append('price', this.form.get('price').value)
   
    formData.append('make', this.form.get('make').value)
    formData.append('bodytype', this.form.get('bodytype').value)
    formData.append('mileage', this.form.get('mileage').value)
    formData.append('color', this.form.get('color').value)
    formData.append('engine', this.form.get('engine').value)
    formData.append('description', this.form.get('description').value)

  
    console.log(`THE FUCK!!! ${formData}`)

    return this.http.post(`${url}`,  formData) 
    
    .subscribe(data => {
      fh.style.display = 'none'
      console.log(`THis is the response from the server ${data}`)
      this.selectedFile = data['pic']//['originalname']
      let imagePath = `http://localhost:3005/uploads/`
      let createdImg = `<h3>File Upload</h3><br/> 
                          <img src=${this.selectedFile} style="height: 100px; width:150px;">
                          <br/>
                          
                          `

      let holder = document.getElementById('img-holder')
      holder.innerHTML = createdImg
      this.editHolder.style.display = 'block'
      

      
      
    })
  }

}
