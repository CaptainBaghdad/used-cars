import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  
  form: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder,private router: Router) { 
    
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
    console.log(`VAL!!! ${val.name}`)

    
     return  this.http.post('http://localhost:3005/register',{
       name: val.name,
       email: val.email,
       password: val.password
     })
     .subscribe(data => {
       this.router.navigate(['login'])
      
       console.log(`Observe response : ${Object.values(data)}`);
     })
   // this.name = e.target.value;
    //this.email = e.target.email.value;
    //this.password = e.target.password.value;
    console.log(`Bom Dia`);
  }

}
