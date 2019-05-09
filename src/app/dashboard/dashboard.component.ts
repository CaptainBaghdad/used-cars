import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})


export class DashboardComponent implements OnInit {
  form:FormGroup
  show: Boolean = true
  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) { 
    this.form = this.fb.group({
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

  ngOnInit() {
    this.show = false
  }

  handleFile = (event) =>{
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      let price = event.target.price.value
      let make = event.target.make.value;
      let bodytype = event.target.bodytype.value;
      let color = event.target.color.value;
      let engine = event.target.engine.value;
      let mileage = event.target.mileage.value;
      let description = event.target.description.value
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

    const formData = new FormData();
    formData.append('file', this.form.get('file').value);
   
    formData.append('price', this.form.get('price').value)
    //console.log(`FormData Price: ${this.form.get('price').value}`);
    formData.append('make', this.form.get('make').value)
    formData.append('bodytype', this.form.get('bodytype').value)
    formData.append('mileage', this.form.get('mileage').value)
    formData.append('color', this.form.get('color').value)
    formData.append('engine', this.form.get('engine').value)
    formData.append('description', this.form.get('description').value)

    let formHolder = document.getElementById('dash-main-div');

    return this.http.post('http://localhost:3005/newcar',  formData)
    .subscribe(data => {
      formHolder.style.display = 'none'
      console.log(`THis is the response from the server ${Object.keys(data)}`)
      this.selectedFile = data['pic']//['originalname']
      let imagePath = `http://localhost:3005/uploads/`
      let createdImg = `<h3>File Upload</h3><br/> 
                          <img src=${this.selectedFile} >`

      let holder = document.getElementById('img-holder')
      holder.innerHTML = createdImg
     

      
      
    })
  }

}
