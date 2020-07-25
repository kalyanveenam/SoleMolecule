import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mynavbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn:boolean;
  name:string;
  constructor(){
     this.isLoggedIn = (localStorage.getItem("isLoggedIn") == 'true');
     this.name = localStorage.getItem("name");
  }
ngInIt(){
  this.isLoggedIn = (localStorage.getItem("isLoggedIn") == 'true');
  this.name = localStorage.getItem("name");
}

}
