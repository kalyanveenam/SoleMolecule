import { Component, OnInit } from '@angular/core';
import {HttpConnect} from './httpconnect.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[HttpConnect]
})
export class LoginComponent {

  constructor(private httpConnect : HttpConnect,private router:Router){}
   onSubmit = (value) =>{
     var obs = this.httpConnect.login(value.email,value.password);
     obs.subscribe((response)=>{
       console.log('response is '+JSON.stringify(response))
       if(response){
        this.router.navigate(['home']);
       }
     })
   }
}
