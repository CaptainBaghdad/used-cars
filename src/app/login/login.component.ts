import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [' h3 {margin-top:15px; margin-left: 150px;} .ini {width:400px;} #sub-btn {margin-left:185px;} #log-div {margin-left: 450px; margin-top: 10%; background: #596b89; width:500px; height:400px;}']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) {
    document.body.style.background = '#cbd9ef';
    this.form = this.fb.group({
      
      email: [""],
      password: [""]
  });

   }

   email: string = ""
  password: string  = ""
  loggedin: boolean = false;

  

  handleSubmit = () => {
    let val = this.form.value;
     //this.email =  val.email;
     //this.password = val.password;
    return  this.http.post('http://localhost:3005/login', {
      email: val.email,
      password: val.password
     })
     .subscribe(data => {
       this.loggedin = true;
       let token: string = data['token'];
       localStorage.setItem('token', token);
       localStorage.setItem('name', data['data']['name'])
       console.log(`This is the localStorage Name : ${localStorage.getItem('name')}`)
       this.router.navigate(['dashboard'])
       //console.log(`We have success ${data['token']}`)
        
     })

    //console.log(`LOGIN !!!!!`)
  }

  ngOnInit() {
  }

}
