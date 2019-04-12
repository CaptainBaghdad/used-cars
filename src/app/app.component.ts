import { Component } from '@angular/core';
//let ineed = require('ineed');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ang-seven';
  someData = [];
  
ngOnInit(){
    fetch('http://localhost:3005/')
    .then(res => res.json())
    .then( data => this.someData = data.data)




   
  }
}
