import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: ['  h3 {margin-top:15px; margin-left: 150px;} .ini {width:400px;} #sub-btn {margin-left:185px;} #reg-div {margin-left: 450px; margin-top: 10%; background: #596b89; width:500px; height:400px;}']
})
export class RegisterComponent implements OnInit {
  
  form: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder,private router: Router) { 
    document.body.style.background = '#cbd9ef';
    this.form = this.fb.group({
      name: [""],
      email: [""],
      password: [""]
  });

  } 

  name: string = '';
  email: string = '';
  password: string = '';

  ngOnInit() {
  }

  handleSubmit = (e) =>{
    let val: any = this.form.value;
    

    
     return  this.http.post('http://localhost:3005/register',{
       name: val.name,
       email: val.email,
       password: val.password
     })
     .subscribe(data => {
       this.router.navigate(['login'])
      
       
     })
  
  }

}
