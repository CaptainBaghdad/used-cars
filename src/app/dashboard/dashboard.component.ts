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
  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) { 
    this.form = this.fb.group({
      file: []
   })

  }
   selectedFile;

  ngOnInit() {
  }

  handleFile = (event) =>{
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('file').setValue(file);
    }
    

  }

  handleSubmit = () => {

    const formData = new FormData();
    formData.append('file', this.form.get('file').value);
   
    
    return this.http.post('http://localhost:3005/newcar',  formData)
    .subscribe(data => {
      this.selectedFile = data['file']['originalname']
      let imagePath = `http://localhost:3005/uploads/`
      let createdImg = `<h3>File Upload</h3><br/> 
                          <img src=${imagePath}${this.selectedFile} >`

      let holder = document.getElementById('img-holder')
      holder.innerHTML = createdImg
     

      
      
    })
  }

}
