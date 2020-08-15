import { Component, OnInit, Input } from '@angular/core';
import { HttpConnect } from '../login/httpconnect.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
name:string;
@Input() isMobile;
isLoggedIn:boolean;
constructor(private httpConnect : HttpConnect){
  this.isLoggedIn = (localStorage.getItem("isLoggedIn") == 'true');
  this.name = localStorage.getItem("name");
  this.isMobile = (this.isMobile=="true");
}
ngOnInit(){
this.isLoggedIn = (localStorage.getItem("isLoggedIn") == 'true');
this.name = localStorage.getItem("name");
this.isMobile = (this.isMobile=="true");
}
  logout(){
    var token = localStorage.getItem("token");
    this.httpConnect.logout(token).subscribe((response) =>{
    if(response){
      console.log('res bis '+JSON.stringify(response));
      localStorage.clear();
      this.isLoggedIn = false;

    }
    })
}
}
