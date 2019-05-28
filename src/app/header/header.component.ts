import { Component, OnInit } from '@angular/core';
import {TransferServiceService} from '../transfer-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  isLogged: Boolean = false;

  constructor(private transfer: TransferServiceService, private router: Router) { }

  logUmOut = (event) =>{
    //event.target.preventDefault()
    localStorage.clear();
    this.router.navigate(['login'])
  }

  ngOnInit() {
    localStorage.getItem('name') ? this.isLogged = true : this.isLogged = false;  
  }

}
