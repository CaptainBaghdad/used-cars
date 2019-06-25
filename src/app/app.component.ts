import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  template: ` 
  <router-outlet></router-outlet>`,    
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  isLogged = false;
  

  constructor(){
    

  }  
   
ngOnInit(){
  localStorage.getItem('name') !== "" ? this.isLogged = true : this.isLogged  = false;
  
}




  }
    



   
 

