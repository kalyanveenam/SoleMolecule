import { Component, OnInit } from '@angular/core';
import {HttpConnect} from '../login/httpconnect.service';
@Component({
  selector: 'mynavbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[HttpConnect]
})
export class NavbarComponent {
  isLoggedIn:boolean;
  name:string;
  constructor(private httpConnect : HttpConnect){
     this.isLoggedIn = (localStorage.getItem("isLoggedIn") == 'true');
     this.name = localStorage.getItem("name");
  }
ngInIt(){
  this.isLoggedIn = (localStorage.getItem("isLoggedIn") == 'true');
  this.name = localStorage.getItem("name");
}
logout(){
var token = localStorage.getItem("token");
this.httpConnect.logout(token).subscribe((response) =>{
if(response){
  console.log('res bis '+JSON.stringify(response));
  this.isLoggedIn=false;
  localStorage.clear();
}

})
}

}
